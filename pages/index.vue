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
          <Card img-src="hh" text-header="Multi-Format Export">
            Download your polished resume in PDF, LaTeX, or JSON formats, ready
            for any application process.</Card
          >
          <Card img-src="hh" text-header="AI-Powered Analysis"
            >Our smart checker spots etiquette faux pas and grammar slips,
            ensuring your resume is flawless.</Card
          >
          <Card
            img-src="hh"
            text-header="No Login, Zero Data Stored In The Cloud"
            >Your information stays with you. All history securely saved in
            IndexDB, never in the cloud.</Card
          >
          <Card img-src="hh" text-header="Template Variety"
            >Choose from 7 sleek templates to make your resume visually striking
            and professionally tailored following Havard's Guidelines.</Card
          >
          <Card img-src="hh" text-header="Auto Cover Letters"
            >Craft compelling cover letters in seconds with our AI assistant.
            Personalized and powerful.</Card
          >
          <Card
            img-src="hh"
            text-header="Paste The LinkedIn Job Link, Fill Your Info And We'll Do The Rest"
            >Just upload your current resume or fill the info necessary, paste
            the job posting link or paste it in, and let the AI do it's
            magic.</Card
          >
        </div>
      </div>
    </section>
  </main>
</template>
