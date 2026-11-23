import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { CourseRow } from '../types';
interface CourseContextType {
  courses: CourseRow[];
  addCourse: (course: CourseRow) => void;
  updateCourse: (id: string, updated: Partial<CourseRow>) => void;
  deleteCourse: (id: string) => void;
  duplicateCourse: (id: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<CourseRow[]>([]);

  // Fetch initial data from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/v1/courses/');
        if (res.ok) {
          const data = await res.json();
          if (data.length === 0) {
            setCourses([]);
          } else {
            setCourses(data);
          }
        } else {
          setCourses([]);
        }
      } catch (err) {
        console.error("Failed to fetch courses, falling back to mock", err);
        setCourses([]);
      }
    };
    fetchCourses();
  }, []);

  const addCourse = async (course: CourseRow) => {
    try {
      const res = await fetch('http://localhost:8000/api/v1/courses/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
      });
      if (res.ok) {
        const newCourse = await res.json();
        setCourses((prev) => [newCourse, ...prev]);
      }
    } catch (err) {
      console.error(err);
      // Fallback optimistic update
      setCourses((prev) => [course, ...prev]);
    }
  };

  const updateCourse = async (id: string, updated: Partial<CourseRow>) => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/courses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      if (res.ok) {
        const updatedCourse = await res.json();
        setCourses((prev) => prev.map((c) => c.id === id ? updatedCourse : c));
      }
    } catch (err) {
      console.error(err);
      // Optimistic
      setCourses((prev) => prev.map((c) => c.id === id ? { ...c, ...updated } : c));
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      await fetch(`http://localhost:8000/api/v1/courses/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error(err);
    }
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const duplicateCourse = async (id: string) => {
    const existing = courses.find(c => c.id === id);
    if (!existing) return;
    
    const copy = {
      ...existing,
      name: `${existing.name} (Copy)`,
      status: 'draft' as const
    };
    
    // Remove id from copy so backend generates it
    delete (copy as any).id;
    
    await addCourse(copy);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse, duplicateCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
}
