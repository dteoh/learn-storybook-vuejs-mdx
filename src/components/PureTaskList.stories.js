import PureTaskList from './PureTaskList';
import * as TaskStories from './Task.stories.mdx';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
};

const Template = (args, { argTypes }) => ({
  components: { PureTaskList },
  props: Object.keys(argTypes),
  methods: TaskStories.actionsData,
  template: '<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});
Default.args = {
  tasks: [1, 2, 3, 4, 5, 6].map((id) => ({
    ...TaskStories.defaultState.args.task, id: `${id}`, title: `Task ${id}`
  })),
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
