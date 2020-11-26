<script>
    export let cardStyle = "fullfilled"; //fullfilled | outlined
</script>

<style>
    .card{
        border: 1px solid var(--color-primary);
        border-radius: var(--comp-border-radius);
        padding: var(--comp-padding);
        margin: var(--comp-margin);
        color: var(--color-font-primary);
        box-shadow: 1px 2px 3px var(--color-secondary);
    }

    .card.fullfiled {
        background-color: var(--color-primary);
        color: var(--color-font-secondary);
    }
</style>

<div class="card {cardStyle}" >
    <slot></slot>
</div>