<template>
  <div>
    <div class="h-2 w-full bg-yellow-600"></div>
    <div class="h-12 w-full flex items-center justify-between px-6">
      <div class="text-yellow-600">Mevn</div>
      <div>
        <router-link class="no-underline text-gray-700" to="/auth/login">Sign in</router-link>
        <router-link class="no-underline text-gray-700 border-2 p-1 ml-1 rounded-full border-brown" to="/auth/register">Join Now</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
