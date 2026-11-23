import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage"
import { SplashScreen } from "../user-authentication/splash-screen"
import { OnboardingFlow } from "../user-authentication/onboarding/OnboardingFlow"
import { SignUp } from "../user-authentication/signup"
// import { DashboardLayout } from "../dashboard/layout/DashboardLayout"
// import { DashboardHome } from "../dashboard/pages/DashboardHome"
// import { CourseLayout } from "../course/layout/CourseLayout"
// import { CourseLandingPage } from "../course/pages/CourseLandingPage"
// import { CoursePathPage } from "../course/pages/CoursePathPage"
// import { LearningPage } from "../course/pages/LearningPage"
// import { QuizPage } from "../course/pages/QuizPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Dashboard Routes */}
        {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="courses" element={<CourseLandingPage />} />
        </Route> */}

        {/* Course Routes */}
        {/* <Route path="/course" element={<CourseLayout />}>
          <Route path="path" element={<CoursePathPage />} />
          <Route path="learn/:topicId" element={<LearningPage />} />
          <Route path="learn/quiz-1" element={<QuizPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
