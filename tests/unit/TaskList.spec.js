import Vue from 'vue';
import TaskList from '../../src/components/TaskList.vue';
import { WithPinnedTasks } from '../../src/components/TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector('.list-item:nth-child(1).TASK_PINNED');

  expect(firstTaskPinned).not.toBe(null);
});
