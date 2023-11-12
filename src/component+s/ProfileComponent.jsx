function ProfileComponent() {
  return (
    <div className="flex gap-8 items-center mb-6 px-16">
      <img
        className="w-32 rounded-full"
        src="public\images\svg\userprof.png"
        alt=""
      />
      <div>
        <h1 className="text-[32px] font-bold">Afsar Hossen</h1>
        <p className="text-gray-500">Imsuvo97@gmail.com</p>
      </div>
    </div>
  );
}

export default ProfileComponent;
