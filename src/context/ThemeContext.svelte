<script>
    import {setContext, onMount} from 'svelte';
    import { writable } from 'svelte/store';
    import _themes from '../themes';
    export let themes = [..._themes];
    let _current = themes[0].name;

    const getCurrentTheme = name => themes.find(h => h.name === name);
    const Theme = writable(getCurrentTheme(_current));

    setContext("theme",{
        theme: Theme,
        toggle: () => {
            let _currentIndex = themes.findIndex(h => h.name === _current)
            _current = themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)].name
            Theme.update(t => ({ ...t, ...getCurrentTheme(_current) }))
            setRootThemeProps(getCurrentTheme(_current));
        }
    })

    onMount(() => {
        setRootThemeProps(getCurrentTheme(_current))
    })

    const setRootThemeProps = async theme => {
        for (let [prop, value] of Object.entries(theme)) {
            if(prop === '--fonts'){
                value.forEach(async font => {
                    const fontFace = new window.FontFace(font.name, `url(${font.url})`);
                    await fontFace.load();
                    document.fonts.add(fontFace)
                    document.body.classList.add('fonts-loaded');
                })
            }else{
                const varString = `${prop}`
                document.documentElement.style.setProperty(varString, value)
            }
        }
        document.documentElement.style.setProperty('--theme-name', theme.name)
    }
</script>

<slot></slot>