function  About(){
    return(
        <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl text-center">
        
        {/* Rounded Image */}
        <img
          src="asbara.jpeg" // Replace with your image
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700 shadow-md"
        />

        {/* Name & Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
          Asbara Ktk
        </h1>
        <p className="text-lg text-gray-500 mb-6">Full Stack Developer</p>

        {/* About Me */}
        <h2 className="text-2xl font-bold mb-3 text-gray-800">About Me</h2>
        <p className="text-gray-600 mb-4">
          Hello! I’m a passionate developer with a love for creating modern,
          user-friendly web applications. I specialize in front-end
          development, React.js, and Tailwind CSS. My goal is to design and
          build applications that make life easier and more enjoyable for
          users.
        </p>
        <p className="text-gray-600">
          In my free time, I enjoy learning new technologies, contributing to
          open-source projects, and exploring innovative UI/UX designs.
        </p>
      </div>
    </div>
        </>
    )
}
export default About