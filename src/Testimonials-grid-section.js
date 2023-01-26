(function () {
  const createContent = () => {
    document.querySelector('body').classList.add('body');
    document.querySelector('.body').insertAdjacentHTML('beforeend', `<main class='main'></main>`);
    document.querySelector('.body').insertAdjacentHTML('beforeend', `<footer class='attribution'>Challenge by <a class='anchor' href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a class='anchor' href='https://github.com/eserengo/' target='_blank'>Federico Borzani</a>.</footer>`);

    class Testimonial {
      constructor(query, avatar, name, vg, quote, review) {
        this.query = query;
        this.avatar = avatar;
        this.name = name;
        this.vg = vg;
        this.quote = quote;
        this.review = review;
      }
      createSection() {
        return document.querySelector('.main').insertAdjacentHTML('beforeend', `<section class='${this.query}'><img class='avatar' src='${this.avatar}' alt='avatar image' /><span class='name'>${this.name}</span><br><span class='vg'>${this.vg}</span><br><b class='quote'>${this.quote}</b><p class='review'>${this.review}</p></section>`);
      }
    }

    const subj1 = new Testimonial(`card card-1`, `./src/images/image-daniel.jpg`, `Daniel Clifford`, `Verified Graduate`, `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`, `“ I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”`);
    subj1.createSection();
    const subj2 = new Testimonial(`card card-2`, `./src/images/image-jonathan.jpg`, `Jonathan Walters`, `Verified Graduate`, `The team was very supportive and kept me motivated`, `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. ”`);
    subj2.createSection();
    const subj3 = new Testimonial(`card card-3`, `./src/images/image-jeanette.jpg`, `Jeanette Harmon`, `Verified Graduate`, `An overall wonderful and rewarding experience.`, `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”`);
    subj3.createSection();
    const subj4 = new Testimonial(`card card-4`, `./src/images/image-patrick.jpg`, `Patrick Abrams`, `Verified Graduate`, `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`, `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”`);
    subj4.createSection();
    const subj5 = new Testimonial(`card card-5`, `./src/images/image-kira.jpg`, `Kira Whittle`, `Verified Graduate`, `Such a life-changing experience. Highly recommended!`, `“ Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”`);
    subj5.createSection();
  }

  const displayOnResize = () => {
    if (window.matchMedia('(width<=375px)').matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.main').classList.add('flex-col');
    }
    if (window.matchMedia('(width>375px)').matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.main').classList.remove('flex-col');
    }
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  // ------ FUNCTIONS TO EXECUTE AFTER THE CONTENT HAS BEEN INJECTED

  window.addEventListener('DOMContentLoaded', () => {
    createContent();     // MUST BE THE FIRST FUNCTION TO LOAD
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();