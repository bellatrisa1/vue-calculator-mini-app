<template>
  <div id="app" class="calculator">
    <h1>Калькулятор</h1>
    <div class="display">{{ current }}</div>
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('/')">/</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('*')">*</button>

      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('-')">-</button>

      <button @click="append('0')">0</button>
      <button @click="append('.')">.</button>
      <button @click="calculate">=</button>
      <button @click="append('+')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
    };
  },
  methods: {
    append(value) {
      this.current += value;
    },
    clear() {
      this.current = "";
    },
    calculate() {
      try {
        this.current = eval(this.current).toString();
      } catch (e) {
        this.current = "Ошибка";
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #464bcf;
}

.display {
  background: #f0f0f0;
  font-size: 32px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: right;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  background-color: #4246b9;
  color: white;
  border: none;
  padding: 20px;
  font-size: 30px;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

button:hover {
  background-color: #8f2c50;
}
</style>
