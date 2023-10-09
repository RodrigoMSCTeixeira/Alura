import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import { Module } from "vuex";
import http from "@/http";
import {
  ADICIONA_TAREFA,
  ALTERA_TAREFA,
  DEFINIR_TAREFAS,
} from "@/store/tipo.mutacoes";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";

export interface EstadoTarefa {
  tarefas: ITarefa[];
}

export const tarefa: Module<EstadoTarefa, Estado> = {
  state: {
    tarefas: [],
  },

  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },

    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },

    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex((t) => t.id == t.id);
      state.tarefas[index] = tarefa;
    },
  },

  actions: {
    [OBTER_TAREFAS]({ commit }, filtro: string) {
      let url = "tarefas";

      if (filtro) {
        url += "?descricao" + filtro;
      }

      http
        .get(url)
        .then((resposta) => commit(DEFINIR_TAREFAS, resposta.data))
        .catch((erro) => console.log(erro));
    },

    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .post("tarefas", tarefa)
        .then((resposta) => commit(ADICIONA_TAREFA, resposta.data));
    },

    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .put(`tarefas/${tarefa.id}`, tarefa)
        .then(() => commit(ALTERA_TAREFA, tarefa));
    },
  },
};
