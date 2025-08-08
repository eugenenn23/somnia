// Новий main.js — унікальна структура меню

import chalk from 'chalk';
import { prompt } from '@inquirer/prompts';

// Імпорт команд з новими назвами змінних
import { runErc20Deploy } from './commands/cmdDeployErc20.js';
import { runErc721Deploy } from './commands/cmdDeployErc721.js';
import { quitApp } from './commands/cmdExit.js';
import { grabTokensFromFaucet } from './commands/cmdGetSttFromFaucet.js';
import { transferTokensRandomly } from './commands/cmdSendSttToRandomAddress.js';
import { refreshWalletsSheet } from './commands/xlsx/cmdCreateOrUpdateWalletsTable.js';
import { turnAllOff } from './commands/xlsx/cmdOffAll.js';
import { disableEmptyWallets } from './commands/xlsx/cmdOffZeroBalance.js';
import { enableAllWallets } from './commands/xlsx/cmdOnAll.js';
import { enableEmptyWallets } from './commands/xlsx/cmdOnZeroBalance.js';

// Генератор меню у вигляді Map
const actions = new Map([
    ['1', { label: '📊 Оновити таблицю гаманців', run: refreshWalletsSheet }],
    ['2', { label: '🔓 Увімкнути гаманці з нульовим балансом', run: enableEmptyWallets }],
    ['3', { label: '🔒 Вимкнути гаманці з нульовим балансом', run: disableEmptyWallets }],
    ['4', { label: '🟢 Увімкнути всі гаманці', run: enableAllWallets }],
    ['5', { label: '🔴 Вимкнути всі гаманці', run: turnAllOff }],
    ['6', { label: '💧 Отримати STT з Faucet', run: grabTokensFromFaucet }],
    ['7', { label: '🎲 Надіслати STT на випадкову адресу', run: transferTokensRandomly }],
    ['8', { label: '📝 Деплой ERC-20 контракту', run: runErc20Deploy }],
    ['9', { label: '🖼 Деплой ERC-721 контракту', run: runErc721Deploy }],
    ['0', { label: '🚪 Вихід', run: quitApp }],
]);

// Основна функція
export async function startApp() {
    console.clear();
    console.log(
        chalk.cyanBright('\n=== Somnia CLI Bot ===\n')
    );

    for (const [key, cmd] of actions) {
        console.log(`${chalk.yellow(key)} - ${cmd.label}`);
    }

    const choice = await prompt({ type: 'input', message: 'Оберіть дію:', name: 'option' });
    const selected = actions.get(choice.option?.trim());

    if (!selected) {
        console.log(chalk.red('❌ Невірний вибір, спробуйте ще раз.'));
        return startApp();
    }

    await selected.run();
    await startApp();
}

// Запуск при старті
startApp();
