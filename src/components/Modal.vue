<template>
  <div class="modal-overlay" v-show="showModal">
    <div class="modal">
      <span class="close" @click="clicked()">X</span>
      <h1>Rellena el formulario con tus datos y finaliza tu compra</h1>
      <form @submit.prevent="buyCourse()">
        <div class="form-group">
          <label for="monthExp">Mes de expiración</label>
          <input
            v-model="exp_month"
            required
            autocomplete="off"
            type="number"
            name="monthExp"
          />
        </div>
        <div class="form-group">
          <label for="yearExp">Año de expiración</label>
          <input
            v-model="exp_year"
            required
            autocomplete="off"
            type="number"
            name="yearExp"
          />
        </div>
        <div class="form-group">
          <label for="numberCard">Nro. Tarjeta</label>
          <input
            v-model="number"
            required
            autocomplete="off"
            type="number"
            name="numberCard"
          />
        </div>
        <div class="form-group">
          <label for="cvc">CVC</label>
          <input
            v-model="cvc"
            required
            autocomplete="off"
            type="number"
            name="cvc"
          />
        </div>
        <input class="btn-modal" type="submit" value="Realizar compra" />
        <div v-if="loader" id="contenedor">
          <div class="loader" id="loader">Loading...</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
export default {
  name: "Modal",
  data() {
    return {
      exp_month: "",
      exp_year: "",
      number: "",
      cvc: "",
      loader: false
    };
  },
  props: {
    showModal: Boolean,
    course_id: String,
  },
  methods: {
    clicked() {
      this.$emit("clicked", false);
    },
    async buyCourse() {
      const response = await axios.post(
        enviroment.URL_API + "product/" + this.course_id,
        {
          exp_month: this.exp_month,
          exp_year: this.exp_year,
          number: this.number,
          cvc: this.cvc,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      this.loader = true;
      ;
      this.$swal
        .fire({
          position: "center",
          icon: "success",
          title: "Compra Realizada",
          showConfirmButton: false,
          timer: 1500,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  height: 450px;
  width: 700px;
  margin-top: 10%;
  padding: 20px 0;
  border-radius: 20px;
}

input[type="text"],
textarea,
input[type="password"],
input[type="number"] {
  width: 50%;
  min-height: 30px;
  border: 1px solid #ccc;
  padding: 3px;
  margin-bottom: 5px;
  transition: all 300ms;
}

input[type="text"]:focus {
  box-shadow: 0 0 5px #444 inset;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close {
  cursor: pointer;
}

.btn-modal {
  border: none;
  background: none;
  padding: 11px;
  background: #eee;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 10px 0;
}

.btn-modal:hover {
  background: #000;
  color: #fff;
}

.loader:before,
.loader:after,
.loader {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  margin: 8em auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: 0.16s;
  animation-delay: 0.16s;
}
.loader:before {
  left: -3.5em;
}
.loader:after {
  left: 3.5em;
  -webkit-animation-delay: 0.32s;
  animation-delay: 0.32s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #8b0505;
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgb(216, 16, 16);
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #be1212;
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgb(216, 24, 24);
  }
}
</style>