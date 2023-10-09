<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="listaEstaVazia"> Você não está muito produtivo hoje :( </Box>

    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Digite para filtrar"
          v-model="filtro"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>

    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @aoTarefaClicada="selecionarTarefa"
    />

    <Modal :mostrar="tarefaSelecionada != null" v-if="tarefaSelecionada">
      <template v-slot:cabecalho>
        <p class="modal-card-title">Editar uma tarefa</p>
        <button class="delete" aria-label="close" @click="fecharModal"></button>
      </template>

      <template v-slot:corpo>
        <div class="field">
          <label for="descricaoDaTarefa" class="label">Descrição</label>
          <input
            type="text"
            class="input"
            v-model="tarefaSelecionada.descricao"
          />
        </div>
      </template>

      <template v-slot:rodape>
        <button class="button is-success" @click="alterarTarefa">
          Salvar alterações
        </button>
        <button class="button" @click="fecharModal">Cancelar</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";
import { computed, defineComponent, ref, watchEffect } from "vue";
import Box from "../components/Box.vue";
import Modal from "@/components/Modal.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "TarefasView",
  components: {
    Formulario,
    Tarefa,
    Box,
    Modal,
  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null,
      modoEscuroAtivo: false,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },

    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },

    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa;
    },

    fecharModal() {
      this.tarefaSelecionada = null;
    },

    alterarTarefa() {
      this.store
        .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal());
    },
  },

  setup() {
    const store = useStore();

    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);

    const filtro = ref("");

    // const tarefas = computed(() =>
    //   store.state.tarefa.tarefas.filter(
    //     (t) => !filtro.value || t.descricao.includes(filtro.value)
    //   )
    // );

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      filtro,
      store,
    };
  },
});
</script>
