import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonPlanDetailPage from './pages/LessonPlanDetailPage';
import ExpertLessonPlanDetailPage from './pages/ExpertLessonPlanDetailPage';
import ExpertsPage from './pages/ExpertsPage';
import ExpertDetailPage from './pages/ExpertDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import SmartLibraryPage from './pages/SmartLibraryPage';
import SupportPage from './pages/SupportPage';
import OrganizationDetailPage from './pages/OrganizationDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import PageNavigationFlowchart from './components/ui/PageNavigationFlowchart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseId" element={<CourseDetailPage />} />
        <Route path="courses/:courseId/modules/:moduleId" element={<LessonPlanDetailPage />} />
        <Route path="expert-courses/:courseId/modules/:moduleId" element={<ExpertLessonPlanDetailPage />} />
        <Route path="experts" element={<ExpertsPage />} />
        <Route path="experts/:expertId" element={<ExpertDetailPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/:resourceId" element={<ResourceDetailPage />} />
        <Route path="smart-library" element={<SmartLibraryPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="organizations/:organizationId" element={<OrganizationDetailPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="admin" element={<AdminDashboardPage />} />
        <Route path="/flowchart" element={<PageNavigationFlowchart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;