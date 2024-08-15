import { API } from './API';
import { getQueryParameterWithDefault } from './utils';

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('homepage')) {
        init_sessionStorage();
        init_heroLogic();
        init_fetchLogic();
    } else if (document.body.classList.contains('thank-you-page')) {
        init_typHeroLogic();
    }
});

function init_sessionStorage() {
    const test = getQueryParameterWithDefault('test', 'default');
    sessionStorage.setItem('test', test);
    sessionStorage.setItem('timestamp', new Date().getTime());

    console.log('🔒 Session storage initialized! Data:');
    console.log(sessionStorage);
}

function init_heroLogic() {
    console.log('🦸‍♂️ Hero logic initialized!');
}

function init_typHeroLogic() {
    console.log('🦸‍♂️ Thank you hero logic initialized!');
}

function init_fetchLogic() {
    console.log('🚀 Fetch logic initialized!');
    API.log();
}
