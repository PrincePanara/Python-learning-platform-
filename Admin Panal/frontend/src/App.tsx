import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Modules } from './pages/Modules';
import { ModuleCreation } from './pages/ModuleCreation';
import { ModuleDetail } from './pages/ModuleDetail';
import { Courses } from './pages/Courses';
import { CourseCreation } from './pages/CourseCreation';
import { CourseDetail } from './pages/CourseDetail';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { CourseProvider } from './contexts/CourseContext';

export function App() {
  return (
    <ThemeProvider>
      <CourseProvider>
        <BrowserRouter>
          <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/new" element={<ModuleCreation />} />
            <Route path="/modules/:moduleId" element={<ModuleDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/new" element={<CourseCreation />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/courses/:courseId/edit" element={<CourseCreation />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </CourseProvider>
    </ThemeProvider>);

}