<script>
        import Icon from 'fa-svelte'
        import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

</script>

<style>
    input {
        border: 1px solid var(--color-secondary);
        border-radius: var(--comp-border-radius);
        padding: var(--comp-padding);
        width: 80%;
    }
</style>

<div>
    <input type="text" placeholder="Buscar...">
    <Icon icon={faSearch} />
</div>