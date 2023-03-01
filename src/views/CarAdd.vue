<template>
  <div class="relative">
    <div class="center">
      <header class="header">
        <Logo />
        <nav id="menu">
          <ul>
            <li>
              <router-link class="color" to="/courses" active-class="active"
                >Regresar</router-link
              >
            </li>
            <li>
              <router-link
                v-on:click="clearLocalStorage()"
                class="color"
                to="/login"
                active-class="active"
                >Salir</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="clearfix"></div>
      </header>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        v-if="coursesCart && coursesCart.length >= 1"
        class="car-content"
      >
        <article
          class="article-item-cart"
          v-for="course in coursesCart"
          :key="course.id"
        >
        <div class="content-article">
          <h2>{{ course.name }}</h2>
          <span>{{ course.price }} COP</span>
        </div>
        <div class="content-button">
          <button @click="openModal(course.id)" class="btn-cart">Comprar</button>
          
          <button @click="deleteItem(course.id)" class="btn-cart-delete">
            Eliminar
          </button>
        </div>
      </article>
      
      <div data-aos="fade-up" data-aos-duration="1000 " class="btn-all">
        <!-- <button @click="buyOpenModal = true" class="btn-buy-all">
          Comprar
        </button> -->
        <button @click="deleteAll()" class="btn-cart-delete">
          Eliminar todo
        </button>
      </div>
    </div>
    <Modal :course_id="courseId" @clicked="closeModal" :showModal="modal"> </Modal>
      <div v-if="coursesCart && coursesCart.length < 1">
        <p><strong>No tienes nada en tu carrito! </strong></p>
        <p>Añade un curso<router-link to="/courses"> aqui</router-link></p>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import Logo from "../components/Logo.vue";
import enviroment from "../enviroments/enviroment.js";
import Modal from "../components/Modal.vue";
import axios from "axios";

export default {
  name: "CarAdd",
  components: {
    FooterComponent,
    Logo,
    Modal,
  },
  data() {
    return {
      exp_month: "",
      exp_year: "",
      number: "",
      cvc: "",
      coursesCart: [],
      courseId: null,
      modal: false,
    };
  },
  methods: {
    closeModal(value) {
      this.modal = value;
    },

    openModal(id){
      this.modal = true;
      this.courseId= id;
    },
    clearLocalStorage() {
      localStorage.clear();
      this.$router.push("/");
    },
    async getCartShopping() {
      const response = await axios.get(enviroment.URL_API + "cart", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.coursesCart = response.data;
    },
    async deleteItem(id) {
      const response = await axios.delete(enviroment.URL_API + "cart/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response)
      if (response) {
        this.$swal
          .fire({
            position: "center",
            icon: "success",
            title: "Curso eliminado!",
            showConfirmButton: false,
            timer: 1500,
          })
          .then(() => {
            location.reload();
          });
      }
    },
    

    async deleteAll() {
      const response = await axios.delete(enviroment.URL_API + "cart/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.$swal
        .fire({
          position: "center",
          icon: "success",
          title: "Carrito vacio!",
          showConfirmButton: false,
          timer: 1500,
        })
        .then(() => {
          location.reload();
        });
    },
    
  },
  created() {
    this.getCartShopping();
  },
};
</script>

<style scoped>


.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
}

.car-content {
  border-bottom: 1px solid #a5a5a5;
  width: 60%;
  margin: 0 auto;
  border-radius: 10px;
}

.content-article,
.content-button {
  display: flex;
  align-items: center;
  width: 50%;
}

.content-article h2,
span {
  margin: 0;
  padding: 10px 10px;
}

.content-article span {
  color: red;
  font-weight: bold;
}

.content-button {
  justify-content: flex-end;
  margin-right: 15px;
}

.article-item-cart {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}

.btn-cart,
.btn-buy-all,
.btn-cart-delete {
  border: none;
  background: none;
  padding: 11px;
  background: #eee;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 10px 0;
}

.btn-cart:hover {
  background: #000;
  color: #fff;
}

.btn-buy-all:hover {
  background: #000;
  color: #fff;
}

.btn-buy-all {
  margin: 15px 0;
  font-size: 18px;
}

.btn-cart-delete {
  margin-left: 10px;
  background: #da0909;
  color: #ffffff;
  transition: 300ms all ease-in;
}

.btn-cart-delete:hover {
  background: #7c0404;
}
</style>