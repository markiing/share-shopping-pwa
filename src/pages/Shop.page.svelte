<script>
    import { get, EVENT_TYPES } from '../services/data'
    import accounting from 'accounting-js'
    import {headerText} from '../store'
    import Icon from 'fa-svelte'
    import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
    import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
    import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

    import {Card, FilterInput} from '../components'


    export let id;

    let products = []
    get(EVENT_TYPES.ON, `compras/${id}/products`, data => products = data)
    headerText.update(() => "Mercearia")

</script>

<style>
    div.page-interactions{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: white;
        padding: 20px 15px;
        box-shadow: 0px 10px 14px var(--color-secondary);
    }

    div.total-cart {
        text-align: center;
    }

    div.item-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div.item-list__data{
        font-size: 0.725rem;
    }
</style>

<div class="page-interactions">
    <div>
        <FilterInput/>
    </div>
    <div class="total-cart">
        <div>
            <span>Total no carrinho</span><br/>
            <h2>$140,30</h2>
        </div>
    </div>
</div>

{#each products as {value}}
    <Card cardStyle="outlined">
        <div class="item-list">
            <div>
                <div class="item-list__name">
                    <b>{value.name}</b>
                </div>
                <div class="item-list__data">
                    {accounting.formatMoney(value.price, {symbol: "R$"})}
                    x {value.quantity} = 
                    <span>{accounting.formatMoney(value.price * value.quantity, {symbol: "R$"})}</span>
                </div>
            </div>
            <div>
                <Icon icon={faEdit} />
                <Icon icon={faTrash}/>
            </div>            
        </div>
    </Card>
{/each}
