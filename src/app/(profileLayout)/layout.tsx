import { ProfileSidebar } from "@/components/shared/ProfileSidebar";
import Script from "next/script";

const profileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-rose-50 min-h-screen">
        <div className="max-w-[95%] mx-auto flex gap-8 pt-8">
          <ProfileSidebar />
          <div className="bg-white rounded-3xl w-full h-[93vh] overflow-y-auto px-10 py-8 mb-4 relative">
            {children}
          </div>
        </div>
      </div>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
    </>
  );
};

export default profileLayout;
