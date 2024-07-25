<script setup lang="ts">
useHead({
  link: [
    { rel: "preload", as: "image", href: "/assets/img/hero.webp" },
    {
      rel: "preload",
      as: "font",
      href: "/public/fonts/Roboto-regular/Roboto-regular.woff2",
    },
  ],
});
</script>
<template>
  <main>
    <section class="py-24 px-12 bg-[#FAE585] [border-bottom:4px_solid_black]">
      <div
        class="mx-auto container flex flex-col lg:grid lg:grid-cols-2 items-center justify-between"
      >
        <div>
          <h1
            class="md:text-6xl sm:text-5xl text-4xl lg:text-7xl xxl:text-8xl font-extrabold text-primary-foreground mb-6"
          >
            <em>Spark</em> Your Career With
            <span class="text-[#6D4BFF] underline-offset-8 underline">AI</span>
            Powered Resumes
          </h1>
          <p class="md:text-md lg:text-xl xl:text-2xl text-balance my-12">
            Transform your job search in seconds. csvSpark uses cutting-edge AI
            to craft standout resumes tailored to your unique skills. Your next
            big opportunity is just a click away!
          </p>
          <NuxtLink
            to="/resume/build"
            class="inline-flex w-full justify-center lg:justify-start bg-secondary text-secondary-foreground font-medium py-3 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <ButtonRound text="Get Started" size="lg" />
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:justify-center">
          <img
            src="@/assets/img/hero.webp"
            width="368"
            height="716"
            alt="Hero Image"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    <section
      class="[border-bottom:4px_solid_black] inset-0 w-full bg-secondary bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 py-16 flex items-center"
    >
      <div class="w-full mx-auto flex items-center flex-col">
        <h2
          class="text-3xl lg:text-4xl xl:text-6xl font-bold text-center mb-16"
        >
          Explore Our Key Features
        </h2>
        <div
          class="lg:grid flex flex-col items-center lg:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          <Card text-header="Multi-Format Export">
            Download your polished resume in PDF, LaTeX, or JSON formats, ready
            for any application process.</Card
          >
          <Card text-header="AI-Powered Analysis"
            >Our smart checker spots etiquette faux pas and grammar slips,
            ensuring your resume is flawless.</Card
          >
          <Card text-header="No Login, Zero Data Stored In The Cloud"
            >Your information stays with you. All history securely saved in
            IndexDB, never in the cloud.</Card
          >
          <Card text-header="Template Variety"
            >Choose from 7 sleek templates to make your resume visually striking
            and professionally tailored following Havard's Guidelines.</Card
          >
          <Card text-header="Auto Cover Letters"
            >Craft compelling cover letters in seconds with our AI assistant.
            Personalized and powerful.</Card
          >
          <Card text-header="Paste in the job link and we'll do the rest"
            >Upload your current resume or fill the necessary info, paste the
            job posting link or it's contents and let the AI do it's
            magic.</Card
          >
        </div>
      </div>
    </section>
    <section
      class="[border-bottom:4px_solid_black] inset-0 bg-[#7de2cd] w-full px-5 py-16 flex items-center"
    >
      <div class="w-full mx-auto flex items-center flex-col">
        <h1 class="text-5xl mb-12 font-bold">FAQ</h1>
        <div class="flex flex-col gap-y-5">
          <Accordion title="Are resumes generated with this foolproof?"
            >Of course not! Like with everything made with AI
            <em><strong>you should 100% proofread it first </strong></em>before
            using it.</Accordion
          >
          <Accordion title="Will this be free forever?"
            >This is just a demo, as long as there are openAI credits left in my
            account it will.</Accordion
          >
          <Accordion title="Can I use this locally?"
            >Yes, in the github repository there are instructions on how to do
            this.</Accordion
          >
          <Accordion title="Is this open source?"
            >Yes, you're free to do whatever with the code, just read the
            license first :)</Accordion
          >
        </div>
      </div>
    </section>
    <section>
      <Footer />
    </section>
  </main>
</template>
