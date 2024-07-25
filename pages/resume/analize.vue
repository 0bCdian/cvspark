<script setup lang="ts">
const selectedFile = ref<File | null>(null);
const errorMessage = ref<string>("");
const isUploading = ref(false);

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (
      file.type === "application/pdf" &&
      file.name.toLowerCase().endsWith(".pdf")
    ) {
      selectedFile.value = file;
      errorMessage.value = "";
    } else {
      selectedFile.value = null;
      errorMessage.value = "Please select a PDF file.";
      target.value = ""; // Reset the file input
    }
  }
}

async function handleSubmit(event: Event) {
  event.preventDefault();
  if (!selectedFile.value) {
    errorMessage.value = "Please select a file before uploading.";
    return;
  }

  isUploading.value = true;
  errorMessage.value = "";

  try {
    const formData = new FormData();
    formData.append("resume", selectedFile.value);

    const { data, error } = await useFetch("/api/upload-resume", {
      method: "POST",
      body: formData,
    });

    if (error.value) {
      throw error.value;
    }

    console.log("Upload successful:", data.value);
    // Handle successful upload (e.g., show success message, reset form)
  } catch (err) {
    console.error("Upload failed:", err);
    errorMessage.value = "Failed to upload file. Please try again.";
  } finally {
    isUploading.value = false;
  }
}
</script>

<template>
  <div
    class="flex flex-col justify-center gap-16 container mx-auto mt-12 items-center"
  >
    <h1 class="text-5xl font-semibold text-balance text-center">
      Upload your resume to check for gramatical errors, resume etiquette and
      other common mistakes
    </h1>
    <div
      class="w-full max-w-md h-fit border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
    >
      <div class="flex flex-col p-6">
        <h3
          class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"
        >
          Upload Your Resume
        </h3>
      </div>
      <div class="px-6 pb-6 pt-3">
        <form enctype="multipart/form-data" @submit="handleSubmit">
          <div class="flex flex-col gap-4">
            <label class="text-sm font-medium leading-none" for="resume">
              Resume
            </label>
            <div class="relative">
              <input
                id="resume"
                class="sr-only"
                accept=".pdf"
                type="file"
                @change="handleFileChange"
              />
              <label
                for="resume"
                class="flex items-center justify-between w-full rounded-md border-2 border-black px-3 py-2 text-sm cursor-pointer"
              >
                <span class="flex-grow truncate">
                  {{ selectedFile ? selectedFile.name : "Choose file" }}
                </span>
                <span class="border-l border-black pl-3 ml-3">Browse</span>
              </label>
            </div>
            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>
            <ButtonRound
              text="Upload"
              type="submit"
              class="self-center w-1/2"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-shadow {
  transition:
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
