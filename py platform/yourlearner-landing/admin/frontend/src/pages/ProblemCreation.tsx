import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SaveIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextField, Select } from '../components/ui/Field';

export function ProblemCreation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    id: '',
    number: '',
    title: '',
    difficulty: 'Easy',
    acceptance: '0%',
    tags: '',
    company: '',
    time: '15 mins',
    xp: '100',
    description: '',
    starter_code: 'def solution():\n    pass\n',
  });

  const [testCases, setTestCases] = useState([{ input: '', expected: '' }]);

  const handleTestCaseChange = (index: number, field: 'input' | 'expected', value: string) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: '', expected: '' }]);
  };

  const removeTestCase = (index: number) => {
    if (testCases.length > 1) {
      const newTestCases = [...testCases];
      newTestCases.splice(index, 1);
      setTestCases(newTestCases);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!formData.id || !formData.title || !formData.number) {
      setError('ID, Number, and Title are required.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const payload = {
        id: formData.id,
        number: parseInt(formData.number, 10),
        title: formData.title,
        difficulty: formData.difficulty,
        acceptance: formData.acceptance,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        company: formData.company,
        time: formData.time,
        xp: parseInt(formData.xp, 10),
        description: formData.description,
        starter_code: formData.starter_code,
        test_cases: testCases.filter(tc => tc.input && tc.expected)
      };

      const res = await fetch('http://localhost:8000/api/v1/problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Failed to create problem');
      }

      navigate('/practice');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <button 
        onClick={() => navigate('/practice')} 
        className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to Practice
      </button>

      <PageHeader
        title="Create New Problem"
        description="Design a coding challenge for users to practice."
        actions={
          <Button variant="primary" size="md" onClick={handleSave} disabled={loading}>
            <SaveIcon className="h-3.5 w-3.5" />
            {loading ? 'Saving...' : 'Save Problem'}
          </Button>
        }
      />

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-ink text-lg mb-4">Basic Information</h3>
            
            <TextField
              label="Problem ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="e.g. two-sum"
              required
            />
            
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="Problem Number"
                name="number"
                type="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="e.g. 1"
                required
              />
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Two Sum"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-ink">Description (Markdown)</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={8}
                className="w-full rounded-xl border border-line bg-surface p-3 text-[14px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
                placeholder="Write the problem description in markdown..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-ink">Starter Code (Python)</label>
              <textarea
                name="starter_code"
                value={formData.starter_code}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-xl border border-line bg-surface p-3 text-[14px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm bg-slate-50"
              />
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-ink text-lg">Test Cases</h3>
              <Button variant="secondary" size="sm" onClick={addTestCase}>
                <PlusIcon className="h-3.5 w-3.5" />
                Add Case
              </Button>
            </div>
            
            <div className="space-y-4">
              {testCases.map((tc, index) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-canvas rounded-xl border border-line">
                  <div className="flex-1 space-y-2">
                    <label className="text-xs font-medium text-ink">Input</label>
                    <textarea
                      value={tc.input}
                      onChange={(e) => handleTestCaseChange(index, 'input', e.target.value)}
                      rows={2}
                      className="w-full rounded-lg border border-line bg-surface p-2 text-sm font-mono focus:border-primary focus:outline-none"
                      placeholder="nums = [2,7,11,15]\ntarget = 9"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-xs font-medium text-ink">Expected Output</label>
                    <textarea
                      value={tc.expected}
                      onChange={(e) => handleTestCaseChange(index, 'expected', e.target.value)}
                      rows={2}
                      className="w-full rounded-lg border border-line bg-surface p-2 text-sm font-mono focus:border-primary focus:outline-none"
                      placeholder="[0,1]"
                    />
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => removeTestCase(index)}
                      disabled={testCases.length === 1}
                      className="p-2 text-muted hover:text-red-500 disabled:opacity-30 transition-colors"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-ink text-lg mb-4">Metadata</h3>
            
            <Select
              label="Difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange as any}
              options={['Easy', 'Medium', 'Hard']}
            />

            <TextField
              label="XP Reward"
              name="xp"
              type="number"
              value={formData.xp}
              onChange={handleChange}
            />

            <TextField
              label="Time Estimate"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="e.g. 15 mins"
            />

            <TextField
              label="Acceptance Rate"
              name="acceptance"
              value={formData.acceptance}
              onChange={handleChange}
              placeholder="e.g. 45.5%"
            />

            <TextField
              label="Company Tags (Comma separated)"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Google, Amazon"
            />

            <TextField
              label="Topics (Comma separated)"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. Arrays, Hash Table"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
