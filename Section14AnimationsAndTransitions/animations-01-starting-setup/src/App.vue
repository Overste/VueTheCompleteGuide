<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>  <!-- <div class="contain">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition entered-to-class="" entered-active-class="">
    <transition name="para" :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="isParaVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!isUsersVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <transition name="modal"
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  </transition>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
// import UsersList from './components/UsersList.vue';

export default {
  components: {
    // UsersList,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      isParaVisible: false,
      isUsersVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;

        if (round > 10) {
          clearInterval(this.enterInterval)
          done();
        }
      }, 20);
    },
    afterEnter() {

    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;

        if (round > 10) {
          clearInterval(this.leaveInterval)
          done();
        }
      }, 20);
    },
    afterLeave() {

    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval)
    },
    toggleParagraph() {
      this.isParaVisible = !this.isParaVisible;
    },
    animateBlock() {
      console.log("click", this.animatedBlock);
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.isUsersVisible = true;
    },
    hideUsers() {
      this.isUsersVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

/* .v-enter-from { */
/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-active { */
/* .para-enter-active {
  transition: all 0.3s ease-out;
  animation: slide-scale 0.3s ease-out;
} */

/* .v-enter-to { */
/* .para-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from { */
/* .para-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-active { */
/* .para-leave-active {
  transition: all 0.3s ease-in;
  animation: slide-scale 0.3s ease-out;
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* .v-leave-to { */
/* .para-leave-to {
  opacity: o;
  transform: translateY(-30px);
} */

/* .modal-entered-from {

}

.modal-entered-active {
  animation: modal 0.3s ease-out;
}


.modal-entered-to {

}


@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
} */

/* .fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
} */

.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-enter-to {
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1)
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px);
  }
}
</style>