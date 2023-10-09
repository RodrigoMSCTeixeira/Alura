<template>
  <section class="projetos">
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeot"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";
//import { notificacaoMixin } from "../../mixins/notificar";
import useNotificador from "../../hooks/notificador";
import { ALTERAR_PROJETO, CADASTAR_PROJETO } from "@/store/tipo-acoes";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FormularioView",

  props: {
    id: {
      type: String,
    },
  },

  // mixins: [notificacaoMixin],

  // mounted() {
  //   if (this.id) {
  //     const projeto = this.store.state.projeto.projetos.find(
  //       (proj) => proj.id == this.id
  //     );
  //     this.nomeDoProjeto = projeto?.nome || "";
  //   }
  // },

  // data() {
  //   return {
  //     nomeDoProjeto: "",
  //   };
  // },

  // methods: {

  // },

  setup(props) {
    const router = useRouter();
    const store = useStore();
    const { notificar } = useNotificador();

    const nomeDoProjeto = ref("");

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (proj) => proj.id == props.id
      );

      nomeDoProjeto.value = projeto?.nome || "";
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = "";
      notificar(
        TipoNotificacao.SUCESSO,
        "Excelente",
        "O projeto foi cadastrado com sucesso!"
      );
      router.push("/projetos");
    };

    const salvar = () => {
      if (props.id) {
        store
          .dispatch(ALTERAR_PROJETO, {
            id: props.id,
            nome: nomeDoProjeto.value,
          })
          .then(() => lidarComSucesso());
      } else {
        store
          .dispatch(CADASTAR_PROJETO, nomeDoProjeto.value)
          .then(() => lidarComSucesso());
      }
    };

    return {
      nomeDoProjeto,
      salvar,
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
