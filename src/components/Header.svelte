<script>
    import {headerText} from '../store'

    let headerTextValue;

    headerText.subscribe(value => headerTextValue = value)
</script>
<style>
    header {
        width: 100%;
        background-color: var(--color-primary);
        color: var(--color-font-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header h1 {
        margin: 0;
        padding: 30px;
    }
</style>

<header>
<h1> {headerTextValue}</h1>
</header>

