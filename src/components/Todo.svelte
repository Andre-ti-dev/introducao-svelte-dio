<script>
  import { tasks } from "../store/tasks";
  let task = "";

  const handleSubmit = () => {
    if (task.trim()) {
      tasks.update(oldTasks => [...oldTasks, task]);
      task = "";
    }
  };

  const remove = i => {
    tasks.update(oldTasks => {
      oldTasks.splice(i, 1);
      return [...oldTasks];
    });
  };
</script>

<h1>Todo List</h1>
<!-- Fazendo bind do evento submit do form para chamar a função handleSubmit e com o modificador preventDefault impedindo de atualizar a página -->
<form on:submit|preventDefault={handleSubmit}>
  <!-- Fazendo bind (Associação do valor do input com a variável) no input com task-->
  <input bind:value={task} type="text" />
  <button type="submit">Add</button>
</form>

<ul>
  {#each $tasks as task, i}
    <li>
      {task}
      <button on:click|preventDefault={() => remove(i)}>X</button>
    </li>
  {/each}
</ul>
