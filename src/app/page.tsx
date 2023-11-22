import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <div className="mt-12 ml-36 h-screen w-full flex justify-between">
        <div>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  )
}
