<script>
    import Confetti from "./Confetti.svelte";
    import { formatUSD, calculate } from "../helpers";
    import { url, result, loading, awardIcons } from "../stores";

    const copyLink = () => {
        navigator.clipboard.writeText(
            `https://docyx.github.io/reddit-award-calculator?url=${$url}`
        );
    };
</script>

<style>
    .input {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
    }
</style>

<input
    type="text"
    class="input"
    bind:value={$url}
    placeholder="Post or Comment URL" />
<button on:click={calculate($url)} disabled={!$url}>
    {#if $loading}Loading...{:else}Calculate{/if}
</button>

{#if $result !== null}
    <h1 style="margin-top: 5px; margin-bottom: 1px;">~{formatUSD($result)}</h1>
    <a href="#" on:click={copyLink}>Copy link to this result</a>
{/if}

{#if $awardIcons.length}
    <Confetti awards={$awardIcons} amount={$awardIcons.length} />
{/if}
