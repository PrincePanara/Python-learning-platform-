import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { CourseRow } from '../types';
import { courses as initialCourses } from '../data/courses';

interface CourseContextType {
  courses: CourseRow[];
  addCourse: (course: CourseRow) => void;
  updateCourse: (id: string, updated: Partial<CourseRow>) => void;
  deleteCourse: (id: string) => void;
  duplicateCourse: (id: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<CourseRow[]>(initialCourses);

  const addCourse = (course: CourseRow) => {
    setCourses((prev) => [course, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<CourseRow>) => {
    setCourses((prev) => prev.map((c) => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const duplicateCourse = (id: string) => {
    setCourses((prev) => {
      const existing = prev.find(c => c.id === id);
      if (!existing) return prev;
      const copy = {
        ...existing,
        id: `c-copy-${Date.now()}`,
        name: `${existing.name} (Copy)`,
        status: 'draft' as const
      };
      return [copy, ...prev];
    });
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
