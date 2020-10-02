<script>
    import { onMount } from "svelte";

    export let amount;
    export let awards;

    let confetti = new Array(amount)
        .fill()
        .map((_, i) => {
            return {
                award: awards[i % awards.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: 0.1 + Math.random() * 1,
            };
        })
        .sort((a, b) => a.r - b.r);

    onMount(() => {
        let frame;

        function run() {
            frame = requestAnimationFrame(run);

            confetti = confetti.map((c) => {
                c.y += 0.7 * c.r;
                if (c.y > 120) c.y = -20;
                return c;
            });
        }

        run();

        return () => cancelAnimationFrame(frame);
    });
</script>

<style>
    :global(body) {
        overflow: hidden;
    }

    span {
        position: absolute;
        font-size: 5vw;
    }
</style>

{#each confetti as c}
    <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
        <img src={c.award} height="64" width="64" alt="Award" />
    </span>
{/each}
