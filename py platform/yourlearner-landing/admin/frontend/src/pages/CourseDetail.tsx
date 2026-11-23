import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  EditIcon, Trash2Icon, CopyIcon, EyeIcon, PlayCircleIcon, 
  ClockIcon, UsersIcon, StarIcon, CheckCircleIcon, BookOpenIcon 
} from 'lucide-react';
import { useCourses } from '../contexts/CourseContext';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Sparkline';
import { useState, useEffect } from 'react';

export function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, deleteCourse, duplicateCourse, updateCourse } = useCourses();

  const course = courses.find((c) => c.id === courseId);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    if (course) {
      const fetchModules = async () => {
        try {
          const res = await fetch(`http://localhost:8000/api/v1/modules/?course=${course.name}`);
          if (res.ok) {
            const data = await res.json();
            setModules(data);
          }
        } catch (err) {
          console.error("Failed to fetch modules", err);
        }
      };
      fetchModules();
    }
  }, [course]);

  if (!course) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-ink">Course not found</h2>
          <p className="mt-2 text-muted">The course you are looking for does not exist or has been deleted.</p>
          <Button className="mt-4" onClick={() => navigate('/courses')}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(course.id);
      navigate('/courses');
    }
  };

  const handleDuplicate = () => {
    duplicateCourse(course.id);
    navigate('/courses');
  };

  const togglePublish = () => {
    const newStatus = course.status === 'live' ? 'draft' : 'live';
    updateCourse(course.id, { status: newStatus });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-2">
        <Button variant="ghost" size="sm" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </Button>
      </div>

      <PageHeader
        title={course.name}
        description={`Instructor: ${course.instructor} • Created on ${new Date().toLocaleDateString()}`}
        actions={
          <div className="flex gap-2">
            <Button size="md" variant="ghost" onClick={handleDuplicate}>
              <CopyIcon className="h-4 w-4 mr-1.5" /> Duplicate
            </Button>
            <Button size="md" variant="ghost" onClick={() => {}}>
              <EyeIcon className="h-4 w-4 mr-1.5" /> Preview
            </Button>
            <Button size="md" variant="secondary" onClick={() => navigate(`/courses/${course.id}/edit`)}>
              <EditIcon className="h-4 w-4 mr-1.5" /> Edit Course
            </Button>
            <Button 
              size="md" 
              variant={course.status === 'live' ? 'secondary' : 'primary'} 
              onClick={togglePublish}
            >
              {course.status === 'live' ? 'Unpublish' : 'Publish'}
            </Button>
            <Button size="md" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleDelete}>
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </div>
        }
      />

      {/* Hero / Cover Image Mock */}
      <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-surface shadow-soft border border-line flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-accent-600/20" />
        {course.thumb.startsWith('http') ? (
          <img src={course.thumb} alt="Course Cover" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-overlay" />
        ) : (
          <h1 className="text-6xl font-bold text-ink/20 tracking-tighter uppercase z-10">{course.thumb}</h1>
        )}
        <div className="absolute bottom-4 left-4 z-20">
           <StatusBadge status={course.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main Content */}
        <div className="space-y-6">
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
            <CardHeader title="About This Course" />
            <div className="p-5 sm:p-6 text-sm text-ink leading-relaxed space-y-4">
              <p className="text-[15px] font-medium">{course.description}</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge>{course.difficulty}</Badge>
                <Badge>{course.language}</Badge>
                {course.discount > 0 && <Badge tone="accent">{course.discount}% off</Badge>}
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
            <CardHeader title="Course Content" description={`${course.modules} Modules • ${course.lessons} Lessons`} />
            <div className="p-5 sm:p-6">
               {/* Mock Modules List */}
               <div className="space-y-3">
                 {modules.length === 0 ? (
                   <div className="text-center py-6 text-muted border border-dashed border-line rounded-2xl">
                     <p>No modules added yet.</p>
                     <Button size="sm" variant="ghost" className="mt-2" onClick={() => navigate('/modules/new')}>
                       Add Module
                     </Button>
                   </div>
                 ) : modules.map((mod, index) => (
                   <div key={mod.id} className="flex items-center justify-between p-3 rounded-2xl border border-line hover:bg-canvas transition-colors">
                     <div className="flex items-center gap-3">
                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface shadow-sm">
                         <PlayCircleIcon className="h-5 w-5 text-brand-600" />
                       </div>
                       <div>
                         <p className="text-[14px] font-medium text-ink">Module {index + 1}: {mod.name}</p>
                         <p className="text-[12px] text-muted">{mod.lessons || 0} Lessons • {mod.practice || 0} Practices • {mod.quiz || 0} Quizzes</p>
                       </div>
                     </div>
                     <Button size="sm" variant="ghost" onClick={() => navigate(`/modules/${mod.id}`)}>View</Button>
                   </div>
                 ))}
               </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
            <CardHeader title="Course Overview" />
            <div className="p-5 sm:p-6 space-y-4">
               <div className="flex items-center justify-between">
                 <span className="text-[28px] font-bold text-ink">${course.price}</span>
                 {course.discount > 0 && (
                   <span className="text-[14px] text-muted line-through">${Math.round(course.price / (1 - course.discount/100))}</span>
                 )}
               </div>

               <div className="space-y-3 mt-4 pt-4 border-t border-line">
                 <div className="flex items-center gap-3 text-sm text-ink">
                   <ClockIcon className="h-4 w-4 text-muted" />
                   <span>{course.duration} total duration</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-ink">
                   <BookOpenIcon className="h-4 w-4 text-muted" />
                   <span>{course.modules} modules, {course.lessons} lessons</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-ink">
                   <UsersIcon className="h-4 w-4 text-muted" />
                   <span>{course.students.toLocaleString('en-US')} students enrolled</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-ink">
                   <StarIcon className="h-4 w-4 text-muted" />
                   <span>{course.rating > 0 ? course.rating.toFixed(1) : 'No reviews'} ({course.reviews} reviews)</span>
                 </div>
               </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
            <CardHeader title="Engagement" />
            <div className="p-5 sm:p-6">
              <div className="mb-2 flex items-center justify-between text-sm text-muted">
                <span>Average Completion</span>
                <span className="tabular-nums font-medium text-ink">{course.completion}%</span>
              </div>
              <Progress value={course.completion} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
