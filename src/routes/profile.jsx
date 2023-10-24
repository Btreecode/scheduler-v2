import { useContext } from "react";
import { AppContext } from "../layout/layout";

export default function Profile() {
  let { user, setUser } = useContext(AppContext);

  if (typeof user === "undefined") return <></>;

  return (
    <div>
      <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mt-10">
        <div class="flex items-center">
          <img
            class="w-14 h-14 rounded-full ml-4"
            src="https://wallpapers.com/images/hd/cool-star-wallpaper-image-hd-wallpaper-android-abpx-4wbzak7jlvpn1bxx.jpg"
            alt="Profile Picture"
          />
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {user.username}
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 w-profile">
              Joined {user.joined}
            </p>
          </div>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Grade</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.grade}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Position</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.position}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Interest</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.interest}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
