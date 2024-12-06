export const Dashboard = () => {
    return <div className="min-h-screen bg-black text-[#EAE7E7] flex">
      {/* Left Sidebar - Just Icons */}
      <div className="w-12 bg-[#181717] flex flex-col items-center py-8 fixed h-full">
        <div className="space-y-8 flex-grow pl-2">
          <button className="text-2xl">🏠</button>
          <button className="text-2xl">📩</button>
          <button className="text-2xl">📋</button>
          <button className="text-2xl">👤</button>
        </div>
        <button className="text-2xl mb-0">⚙️</button> {/* Bottom settings icon */}
      </div>

      {/* Main Content */}
      <div className="w-9/12 p-8 pl-16">
        {/* Header with SkillSync */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">SkillSync</h1>
          <div className="flex items-start justify-start bg-[#181717] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search by topic"
              className="bg-transparent outline-none text-[#EAE7E7] w-64"
            />
            <button>🔍</button>
          </div>
        </div>

        

        {/* Main Questions Section */}
        <div className="mt-8 bg-[#181717] p-6 rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Picks</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#272727] rounded-lg px-4 py-4 shadow-md"
                >
                  Q. The hospital's real-time patient monitoring system...
                </div>
              ))}
            </div>
          </div>

          {/* Operating System Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Operating System</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#272727] rounded-lg px-4 py-4 shadow-md"
                >
                  Q. The hospital's real-time patient monitoring system...
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Right Sidebar - Fixed on the right side */}
      <div className="w-80 bg-[#181717] fixed top-0 right-0 h-full py-2">
        <div className="space-y-2">
          {/* Badges Card */}
          <div className="w-full bg-[#181717] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Badges</h3>
            <div className="bg-[#272727] rounded-lg h-40"></div>
          </div>

          {/* Company Specific Card */}
          <div className="w-full bg-[#181717] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Company Specific</h3>
            <div className="space-y-4">
              {["Amazon", "Google", "Blackrock"].map((company) => (
                <div
                  key={company}
                  className="bg-[#272727] rounded-lg px-4 py-2 text-center"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
}