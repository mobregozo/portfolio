// TODO: para device poner min-height: 100vh; en los h-screen

<template>
  <section class="scrollable">
    <div class="container-fluid p-0">
      <section
        id="about"
        class="md:h-screen sm:min-h-screen resume-section p-3 p-lg-5 d-flex d-column"
      >
        <div class="my-auto">
          <h1 class="mb-0">
            Name
            <span class="text-primary">Lastname</span>
          </h1>
          <h3 class="mb-4">Position- Role</h3>
          <div class="subheading mb-5">
            Location
            <a href="mailto:email">email</a>
          </div>
          <p class="mb-5">• Small BIO.</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="blank" href="https://www.linkedin.com/">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="blank" href="https://github.com/">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github-alt fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="experience"
        class="md:h-screen sm:min-h-screen resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Role</h3>
              <div class="subheading mb-3">Company</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias pariatur eaque ad deleniti obcaecati nemo aliquam odit
                perspiciatis sint.Nam sit neque fugiat incidunt voluptatem
                repellat omnis accusantium voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias pariatur eaque ad deleniti obcaecati nemo aliquam odit
                perspiciatis sint.Nam sit neque fugiat incidunt voluptatem
                repellat omnis accusantium voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias pariatur eaque ad deleniti obcaecati nemo aliquam odit
                perspiciatis sint.Nam sit neque fugiat incidunt voluptatem
                repellat omnis accusantium voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias pariatur eaque ad deleniti obcaecati nemo aliquam odit
                perspiciatis sint.Nam sit neque fugiat incidunt voluptatem
                repellat omnis accusantium voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias pariatur eaque ad deleniti obcaecati nemo aliquam odit
                perspiciatis sint.Nam sit neque fugiat incidunt voluptatem
                repellat omnis accusantium voluptas!
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">Date</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="education"
        class="md:h-screen sm:min-h-screen resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>
          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">University</h3>
              <div class="subheading mb-3">Title</div>
              <div>What</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        class="md:h-screen sm:min-h-screen resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages</div>
          <div class="subheading mb-3">Workflow</div>
        </div>
      </section>

      <section
        id="interests"
        class="md:h-screen sm:min-h-screen resume-section p-3 p-lg-5 d-flex flex-column"
      >
        <div class="my-auto">
          <h2 class="mb-5">Interests / Personal Life</h2>
          <p>Description.</p>
        </div>
      </section>
    </div>
  </section>
</template>
