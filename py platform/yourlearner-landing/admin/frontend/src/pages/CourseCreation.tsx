import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Trash2Icon, PlusIcon, UploadCloudIcon, CheckIcon, EditIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextField, TextArea, Select, Toggle } from '../components/ui/Field';
import { useCourses } from '../contexts/CourseContext';
import { cn } from '../utils/cn';

const sections = ['General Info', 'Details', 'Media', 'Outcomes & Setup', 'Publishing'];

export function CourseCreation() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, addCourse, updateCourse } = useCourses();
  
  const existingCourse = courseId ? courses.find(c => c.id === courseId) : null;
  const isEditing = !!existingCourse;

  const [activeSection, setActiveSection] = useState('General Info');

  // General Info
  const [name, setName] = useState(existingCourse?.name || '');
  const [instructor, setInstructor] = useState(existingCourse?.instructor || '');
  const [category, setCategory] = useState('Development');
  const [language, setLanguage] = useState(existingCourse?.language || 'English');

  // Details
  const [description, setDescription] = useState(existingCourse?.description || '');
  const [about, setAbout] = useState('');
  const [duration, setDuration] = useState(existingCourse?.duration || '');
  const [difficulty, setDifficulty] = useState<string>(existingCourse?.difficulty || 'Beginner');

  // Media
  const [coverFileName, setCoverFileName] = useState('');
  const [coverPreview, setCoverPreview] = useState<string | null>(existingCourse?.thumb && existingCourse.thumb.startsWith('http') ? existingCourse.thumb : null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFileName(file.name);
      // Instant local preview
      const localUrl = URL.createObjectURL(file);
      setCoverPreview(localUrl);
      
      // Upload to backend
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/upload/image', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) throw new Error('Upload failed');
        const data = await response.json();
        
        // Use Cloudinary URL for preview/saving
        setCoverPreview(data.url);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
        setCoverPreview(null);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking the dropzone
    setCoverFileName('');
    setCoverPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Outcomes & Setup
  const [learningOutcomes, setLearningOutcomes] = useState<string[]>(['']);
  const [prerequisites, setPrerequisites] = useState<string[]>(['']);
  const [skills, setSkills] = useState('');

  // Publishing
  const [status, setStatus] = useState(existingCourse?.status || 'Draft');
  const [seoTags, setSeoTags] = useState('');

  const addOutcome = () => setLearningOutcomes([...learningOutcomes, '']);
  const addPrerequisite = () => setPrerequisites([...prerequisites, '']);

  const handleSave = (finalStatus: string) => {
    const courseData = {
      name: name || 'Untitled Course',
      description: description || 'No description provided.',
      instructor: instructor || 'Unknown Instructor',
      difficulty: difficulty as 'Beginner' | 'Intermediate' | 'Advanced',
      language: language,
      status: finalStatus.toLowerCase() as 'live' | 'draft' | 'review' | 'archived',
      duration: duration || '0h 0m',
      thumb: coverPreview || (coverFileName ? coverFileName.substring(0, 2).toUpperCase() : (name ? name.substring(0, 2).toUpperCase() : 'NA'))
    };
    
    if (isEditing && existingCourse) {
      updateCourse(existingCourse.id, courseData);
      navigate(`/courses/${existingCourse.id}`);
    } else {
      const newCourse = {
        ...courseData,
        id: `c-new-${Date.now()}`,
        price: 0,
        discount: 0,
        modules: 0,
        lessons: 0,
        students: 0,
        completion: 0,
        rating: 0,
        reviews: 0,
      };
      addCourse(newCourse);
      navigate('/courses');
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEditing ? `Edit Course: ${existingCourse.name}` : "Create New Course"}
        description="Design and configure a comprehensive new course."
        actions={
          <div className="flex gap-3">
            <Button size="md" variant="ghost" onClick={() => isEditing ? navigate(`/courses/${existingCourse.id}`) : navigate('/courses')}>Cancel</Button>
            <Button size="md" variant="secondary">Preview</Button>
            <Button size="md" onClick={() => handleSave('draft')}>Save Draft</Button>
            <Button size="md" variant="primary" onClick={() => handleSave('live')}>Publish Course</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label="Course sections" className="space-y-5">
          <div>
            <p className="px-2 pb-2 text-2xs font-semibold uppercase tracking-[0.08em] text-faint">Course Setup</p>
            <div className="space-y-0.5">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  aria-current={activeSection === item ? 'page' : undefined}
                  className={cn(
                    'w-full rounded-full px-3 py-2 text-left text-[13.5px] font-medium transition-colors duration-200',
                    activeSection === item ? 'bg-surface text-ink shadow-soft' : 'text-muted hover:bg-surface/70 hover:text-ink'
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-4">
          {activeSection === 'General Info' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="General Information" description="Basic details identifying the course." />
              <div className="space-y-4 p-5 sm:p-6">
                <TextField 
                  label="Course Name" 
                  value={name} 
                  onChange={setName} 
                  placeholder="e.g. Complete Web Development Bootcamp" 
                />
                <TextField 
                  label="Instructor / Author Name" 
                  value={instructor} 
                  onChange={setInstructor} 
                  placeholder="e.g. Jane Doe" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Course Category"
                    value={category}
                    onChange={setCategory}
                    options={['Development', 'Business', 'Design', 'Marketing', 'IT & Software']}
                  />
                  <Select
                    label="Language"
                    value={language}
                    onChange={setLanguage}
                    options={['English', 'Spanish', 'French', 'German', 'Mandarin']}
                  />
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'Details' && (
            <div className="space-y-4">
              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Course Details" description="Provide an engaging description and overview." />
                <div className="space-y-4 p-5 sm:p-6">
                  <TextArea 
                    label="Course Description" 
                    value={description} 
                    onChange={setDescription} 
                    placeholder="A brief, engaging summary shown on the course card..." 
                    rows={3} 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Difficulty Level"
                      value={difficulty}
                      onChange={setDifficulty}
                      options={['Beginner', 'Intermediate', 'Advanced', 'All Levels']}
                    />
                    <TextField 
                      label="Estimated Duration" 
                      value={duration} 
                      onChange={setDuration} 
                      placeholder="e.g. 12 hours 30 mins" 
                    />
                  </div>
                </div>
              </Card>

              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="About This Course" description="Comprehensive markdown description for the landing page." />
                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between rounded-t-2xl border border-line bg-canvas px-4 py-2">
                    <div className="flex gap-2">
                      <span className="text-2xs font-semibold text-faint">MARKDOWN EDITOR</span>
                    </div>
                    <Button size="sm" variant="ghost"><EditIcon className="h-3.5 w-3.5 mr-1" /> Preview</Button>
                  </div>
                  <TextArea 
                    label="" 
                    value={about} 
                    onChange={setAbout} 
                    rows={10} 
                    className="font-mono text-[13px]" 
                    placeholder="## Course Overview..."
                  />
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'Media' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Course Media" description="Upload a captivating thumbnail and cover image." />
              <div className="p-5 sm:p-6 space-y-4">
                <label className="block text-[13px] font-medium text-ink">Course Cover Image / Thumbnail</label>
                
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/gif" 
                  ref={fileInputRef} 
                  className="hidden" 
                  onChange={handleFileChange} 
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-line bg-canvas p-10 text-center transition-colors hover:border-ink/30 cursor-pointer"
                >
                  {coverPreview ? (
                    <div className="absolute inset-0 w-full h-full">
                      <img src={coverPreview} alt="Course Cover Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-ink/40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary" onClick={removeImage} className="text-red-500 hover:text-red-600 bg-surface">
                          <Trash2Icon className="h-4 w-4 mr-1" /> Remove Image
                        </Button>
                      </div>
                    </div>
                  ) : isUploading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
                      <span className="text-sm font-semibold text-ink">Uploading...</span>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-soft">
                        <UploadCloudIcon className="h-5 w-5 text-faint" />
                      </div>
                      <span className="text-[13px] font-semibold text-ink">Click to browse or drag and drop</span>
                      <span className="mt-1 text-2xs text-muted">High resolution images (PNG, JPG) max 5MB. Recommended ratio 16:9.</span>
                    </>
                  )}
                </div>
                {coverFileName && !coverPreview && (
                  <div className="mt-2 flex items-center gap-1 text-[13px] font-medium text-green-600 bg-green-500/10 px-3 py-1.5 rounded-full w-fit">
                    <CheckIcon className="h-4 w-4" /> Attached: {coverFileName}
                  </div>
                )}
              </div>
            </Card>
          )}

          {activeSection === 'Outcomes & Setup' && (
            <div className="space-y-4">
              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Learning Outcomes" description="What will students be able to do after finishing?" />
                <div className="space-y-3 p-5 sm:p-6">
                  {learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex-1">
                        <TextField 
                          label="" 
                          placeholder={`Outcome ${idx + 1}`} 
                          value={outcome} 
                          onChange={(val) => {
                            const updated = [...learningOutcomes];
                            updated[idx] = val;
                            setLearningOutcomes(updated);
                          }} 
                        />
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-600 shrink-0"
                        onClick={() => setLearningOutcomes(learningOutcomes.filter((_, i) => i !== idx))}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" onClick={addOutcome} className="mt-1">
                    <PlusIcon className="h-4 w-4 mr-1" /> Add Outcome
                  </Button>
                </div>
              </Card>

              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Prerequisites" description="What should students know before starting?" />
                <div className="space-y-3 p-5 sm:p-6">
                  {prerequisites.map((prereq, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex-1">
                        <TextField 
                          label="" 
                          placeholder={`Prerequisite ${idx + 1}`} 
                          value={prereq} 
                          onChange={(val) => {
                            const updated = [...prerequisites];
                            updated[idx] = val;
                            setPrerequisites(updated);
                          }} 
                        />
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-600 shrink-0"
                        onClick={() => setPrerequisites(prerequisites.filter((_, i) => i !== idx))}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" onClick={addPrerequisite} className="mt-1">
                    <PlusIcon className="h-4 w-4 mr-1" /> Add Prerequisite
                  </Button>
                </div>
              </Card>

              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Skills Covered" description="Keywords and tags to help students find this course." />
                <div className="p-5 sm:p-6">
                  <TextField 
                    label="Skills / Tags (comma separated)" 
                    value={skills} 
                    onChange={setSkills} 
                    placeholder="e.g. React, TypeScript, State Management" 
                  />
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'Publishing' && (
            <div className="space-y-4">
              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Publishing Settings" description="Visibility and discovery settings." />
                <div className="space-y-6 p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Course Status"
                      value={status}
                      onChange={setStatus}
                      options={['Draft', 'Review', 'Published']}
                    />
                  </div>
                  
                  <TextField 
                    label="SEO Tags / Search Keywords" 
                    value={seoTags} 
                    onChange={setSeoTags} 
                    placeholder="Keywords for search index..." 
                  />
                  
                  <div className="divide-y divide-line rounded-2xl border border-line px-4">
                    <Toggle checked label="Public visibility" description="Discoverable in the course catalogue." onChange={() => undefined} />
                    <Toggle checked label="Issue certificates" description="Auto-generate on 100% completion." onChange={() => undefined} />
                    <Toggle checked={false} label="Allow reviews" description="Learners can rate after finishing." onChange={() => undefined} />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
