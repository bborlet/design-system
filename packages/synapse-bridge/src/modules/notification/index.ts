import { Module, ActionTree, MutationTree, GetterTree, Commit } from 'vuex';

import { RootState } from '..';
import { NotificationState, NotificationObj } from './types';

import { notify } from './notify';

export const state: NotificationState = {
	notification: null,
};

export const actions: ActionTree<NotificationState, RootState> = {
	add({ commit, state }: { commit: Commit; state: NotificationState }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	addNotification({ commit, state }: { commit: Commit; state: NotificationState }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	clear({ commit }: { commit: Commit }) {
		commit('CLEAR');
	},
	clearNotification({ commit }: { commit: Commit }) {
		commit('CLEAR');
	},
};

export const mutations: MutationTree<NotificationState> = {
	ADD(state: NotificationState, notification: NotificationObj) {
		state.notification = notification;
	},
	CLEAR(state: NotificationState) {
		state.notification = null;
	},
};

export const getters: GetterTree<NotificationState, RootState> = {
	notification: (state: NotificationState) => state.notification,
};
export const notification: Module<NotificationState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
