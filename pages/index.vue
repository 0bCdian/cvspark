<script setup lang="ts"></script>

<template>
  <main>
    <section class="py-24 px-12 bg-[#FAE585]">
      <div
        class="mx-auto container flex flex-col lg:grid lg:grid-cols-2 items-center justify-between"
      >
        <div>
          <h1
            class="md:text-6xl sm:text-5xl text-4xl lg:text-7xl xxl:text-8xl font-extrabold text-primary-foreground mb-6"
          >
            <span class="">Spark</span> Your Career With
            <span class="text-[#6D6BFF] underline-offset-8 underline">AI</span>
            Powered Resumes
          </h1>
          <p class="lg:text-2xl md:text-xl text-primary-foreground/80 mb-8">
            Transform your job search in seconds. csvSpark uses cutting-edge AI
            to craft standout resumes tailored to your unique skills. Your next
            big opportunity is just a click away!
          </p>
          <NuxtLink
            href="#"
            class="inline-flex w-full justify-center lg:justify-start bg-secondary text-secondary-foreground font-medium py-3 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <ButtonRound text="Get Started" />
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:justify-center">
          <img
            src="~/assets/img/hero.png"
            alt="Hero Image"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
    <section class="bg-muted py-16 px-6 md:px-12">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Explore Our Key Features
        </h2>
        <div
          class="flex flex-wrap md:justify-between md:gap-x-32 gap-y-14 justify-center items-center flex-col md:flex-row"
        >
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
          <Card img-src="hh" text-header="Yeehaw"> Hello</Card>
        </div>
      </div>
    </section>
  </main>
</template>
