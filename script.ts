// Sample currencies data
interface Currency {
    code: string;
    name: string;
    flag: string;
}

interface PopularPair {
    from: string;
    to: string;
}

interface ExchangeRateResponse {
    result: string;
    conversion_rates: Record<string, number>;
}

// Sample currencies data
const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
    { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
    { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
    { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
    { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰' },
    { code: 'PLN', name: 'Polish Złoty', flag: '🇵🇱' },
    { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿' },
    { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺' },
    { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺' },
    { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷' },
    { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'ARS', name: 'Argentine Peso', flag: '🇦🇷' },
    { code: 'CLP', name: 'Chilean Peso', flag: '🇨🇱' },
    { code: 'COP', name: 'Colombian Peso', flag: '🇨🇴' },
    { code: 'PEN', name: 'Peruvian Sol', flag: '🇵🇪' },
    { code: 'UYU', name: 'Uruguayan Peso', flag: '🇺🇾' },
    { code: 'VEF', name: 'Venezuelan Bolívar', flag: '🇻🇪' },
    { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷' },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
    { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
    { code: 'TWD', name: 'Taiwan Dollar', flag: '🇹🇼' },
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
    { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾' },
    { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩' },
    { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭' },
    { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳' },
    { code: 'BDT', name: 'Bangladeshi Taka', flag: '🇧🇩' },
    { code: 'PKR', name: 'Pakistani Rupee', flag: '🇵🇰' },
    { code: 'LKR', name: 'Sri Lankan Rupee', flag: '🇱🇰' },
    { code: 'NPR', name: 'Nepalese Rupee', flag: '🇳🇵' },
    { code: 'MMK', name: 'Myanmar Kyat', flag: '🇲🇲' },
    { code: 'KHR', name: 'Cambodian Riel', flag: '🇰🇭' },
    { code: 'LAK', name: 'Lao Kip', flag: '🇱🇦' },
    { code: 'MNT', name: 'Mongolian Tugrik', flag: '🇲🇳' },
    { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
    { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬' },
    { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬' },
    { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪' },
    { code: 'GHS', name: 'Ghanaian Cedi', flag: '🇬🇭' },
    { code: 'UGX', name: 'Ugandan Shilling', flag: '🇺🇬' },
    { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿' },
    { code: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦' },
    { code: 'TND', name: 'Tunisian Dinar', flag: '🇹🇳' },
    { code: 'DZD', name: 'Algerian Dinar', flag: '🇩🇿' },
    { code: 'LYD', name: 'Libyan Dinar', flag: '🇱🇾' },
    { code: 'SDG', name: 'Sudanese Pound', flag: '🇸🇩' },
    { code: 'ETB', name: 'Ethiopian Birr', flag: '🇪🇹' },
    { code: 'SOS', name: 'Somali Shilling', flag: '🇸🇴' },
    { code: 'DJF', name: 'Djiboutian Franc', flag: '🇩🇯' },
    { code: 'KMF', name: 'Comorian Franc', flag: '🇰🇲' },
    { code: 'MUR', name: 'Mauritian Rupee', flag: '🇲🇺' },
    { code: 'SCR', name: 'Seychellois Rupee', flag: '🇸🇨' },
    { code: 'BWP', name: 'Botswana Pula', flag: '🇧🇼' },
    { code: 'NAD', name: 'Namibian Dollar', flag: '🇳🇦' },
    { code: 'ZMW', name: 'Zambian Kwacha', flag: '🇿🇲' },
    { code: 'MWK', name: 'Malawian Kwacha', flag: '🇲🇼' },
    { code: 'ZWL', name: 'Zimbabwean Dollar', flag: '🇿🇼' },
    { code: 'AOA', name: 'Angolan Kwanza', flag: '🇦🇴' },
    { code: 'MZN', name: 'Mozambican Metical', flag: '🇲🇿' },
    { code: 'CVE', name: 'Cape Verdean Escudo', flag: '🇨🇻' },
    { code: 'STD', name: 'São Tomé and Príncipe Dobra', flag: '🇸🇹' },
    { code: 'GMD', name: 'Gambian Dalasi', flag: '🇬🇲' },
    { code: 'GNF', name: 'Guinean Franc', flag: '🇬🇳' },
    { code: 'SLL', name: 'Sierra Leonean Leone', flag: '🇸🇱' },
    { code: 'LRD', name: 'Liberian Dollar', flag: '🇱🇷' },
    { code: 'CDF', name: 'Congolese Franc', flag: '🇨🇩' },
    { code: 'XAF', name: 'Central African CFA Franc', flag: '🇨🇫' },
    { code: 'XOF', name: 'West African CFA Franc', flag: '🇧🇫' },
    { code: 'XPF', name: 'CFP Franc', flag: '🇵🇫' },
    { code: 'ISK', name: 'Icelandic Króna', flag: '🇮🇸' },
    { code: 'HRK', name: 'Croatian Kuna', flag: '🇭🇷' },
    { code: 'RSD', name: 'Serbian Dinar', flag: '🇷🇸' },
    { code: 'BGN', name: 'Bulgarian Lev', flag: '🇧🇬' },
    { code: 'RON', name: 'Romanian Leu', flag: '🇷🇴' },
    { code: 'ALL', name: 'Albanian Lek', flag: '🇦🇱' },
    { code: 'MKD', name: 'Macedonian Denar', flag: '🇲🇰' },
    { code: 'BAM', name: 'Bosnia-Herzegovina Mark', flag: '🇧🇦' },
    { code: 'MDL', name: 'Moldovan Leu', flag: '🇲🇩' },
    { code: 'UAH', name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
    { code: 'BYN', name: 'Belarusian Ruble', flag: '🇧🇾' },
    { code: 'GEL', name: 'Georgian Lari', flag: '🇬🇪' },
    { code: 'AMD', name: 'Armenian Dram', flag: '🇦🇲' },
    { code: 'AZN', name: 'Azerbaijani Manat', flag: '🇦🇿' },
    { code: 'KZT', name: 'Kazakhstani Tenge', flag: '🇰🇿' },
    { code: 'KGS', name: 'Kyrgyzstani Som', flag: '🇰🇬' },
    { code: 'TJS', name: 'Tajikistani Somoni', flag: '🇹🇯' },
    { code: 'TMT', name: 'Turkmenistani Manat', flag: '🇹🇲' },
    { code: 'UZS', name: 'Uzbekistani Som', flag: '🇺🇿' },
    { code: 'AFN', name: 'Afghan Afghani', flag: '🇦🇫' },
    { code: 'IRR', name: 'Iranian Rial', flag: '🇮🇷' },
    { code: 'IQD', name: 'Iraqi Dinar', flag: '🇮🇶' },
    { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
    { code: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦' },
    { code: 'KWD', name: 'Kuwaiti Dinar', flag: '🇰🇼' },
    { code: 'BHD', name: 'Bahraini Dinar', flag: '🇧🇭' },
    { code: 'OMR', name: 'Omani Rial', flag: '🇴🇲' },
    { code: 'YER', name: 'Yemeni Rial', flag: '🇾🇪' },
    { code: 'JOD', name: 'Jordanian Dinar', flag: '🇯🇴' },
    { code: 'LBP', name: 'Lebanese Pound', flag: '🇱🇧' },
    { code: 'SYP', name: 'Syrian Pound', flag: '🇸🇾' },
    { code: 'ILS', name: 'Israeli Shekel', flag: '🇮🇱' },
    { code: 'PAL', name: 'Palestinian Pound', flag: '🇵🇸' }
];

const popularPairs = [
    { from: 'USD', to: 'EUR' },
    { from: 'USD', to: 'JPY' },
    { from: 'INR', to: 'USD' },
    { from: 'EUR', to: 'JPY' }
];

// API Configuration
const API_KEY = ''; // add you api key
const BASE_URL = 'https://v6.exchangerate-api.com/v6';


// DOM Elements
const amountInput = document.getElementById('amount') as HTMLInputElement;
const fromCurrencySelect = document.getElementById('fromCurrency') as HTMLSelectElement;
const toCurrencySelect = document.getElementById('toCurrency') as HTMLSelectElement;
const toAmountInput = document.getElementById('toAmount') as HTMLInputElement;
const convertBtn = document.getElementById('convertBtn') as HTMLButtonElement;
const swapBtn = document.getElementById('swapBtn') as HTMLButtonElement;
const rateInfo = document.getElementById('rateInfo') as HTMLDivElement;
const popularConversions = document.getElementById('popularConversions') as HTMLDivElement;
const lastUpdated = document.getElementById('lastUpdated') as HTMLSpanElement;
const loadingOverlay = document.getElementById('loadingOverlay') as HTMLDivElement;

// State
let exchangeRates: Record<string, number> = {};
let lastUpdateTime: Date | null = null;
let lastLoadedBaseCurrency: string = 'INR';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp(): void {
    populateCurrencySelectors();
    toAmountInput.value = '';
    updateRateInfo('Click "Convert" to get exchange rates');
    updateLastUpdated();
}

function populateCurrencySelectors(): void {
    fromCurrencySelect.innerHTML = '';
    toCurrencySelect.innerHTML = '';

    currencies.forEach(currency => {
        const fromOption = document.createElement('option');
        fromOption.value = currency.code;
        fromOption.innerHTML = `${currency.flag} ${currency.code} - ${currency.name}`;
        if (currency.code === 'INR') fromOption.selected = true;
        fromCurrencySelect.appendChild(fromOption);

        const toOption = document.createElement('option');
        toOption.value = currency.code;
        toOption.innerHTML = `${currency.flag} ${currency.code} - ${currency.name}`;
        if (currency.code === 'USD') toOption.selected = true;
        toCurrencySelect.appendChild(toOption);
    });
}

function setupEventListeners(): void {
    convertBtn.addEventListener('click', performConversion);
    swapBtn.addEventListener('click', swapCurrencies);
    amountInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performConversion();
    });
}

async function loadExchangeRates(baseCurrency: string): Promise<ExchangeRateResponse> {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ExchangeRateResponse = await response.json();

    if (data.result === 'success') {
        exchangeRates = data.conversion_rates;
        lastUpdateTime = new Date();
        lastLoadedBaseCurrency = baseCurrency;
        return data;
    } else {
        throw new Error('API returned an error');
    }
}

async function performConversion(): Promise<void> {
    const amount: number = parseFloat(amountInput.value) || 0;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (amount <= 0) {
        toAmountInput.value = '';
        updateRateInfo('Please enter a valid amount');
        return;
    }

    if (fromCurrency === toCurrency) {
        toAmountInput.value = `${amount.toFixed(2)} ${toCurrency}`;
        updateRateInfo(`1 ${fromCurrency} = 1 ${toCurrency}`);
        return;
    }

    try {
        showLoading(true);
        await loadExchangeRates(fromCurrency);
        const rate = exchangeRates[toCurrency];
        const convertedAmount = amount * rate;
        toAmountInput.value = `${convertedAmount.toFixed(2)} ${toCurrency}`;
        updateRateInfo(`1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`);
        updatePopularConversions();
        updateLastUpdated();
    } catch (error) {
        console.error('Conversion error:', error);
        showError('Failed to convert currency. Please try again.');
    } finally {
        showLoading(false);
    }
}

function swapCurrencies(): void {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fromCurrencySelect.value = toCurrency;
    toCurrencySelect.value = fromCurrency;

    toAmountInput.value = '';
    updateRateInfo('Click "Convert" to get exchange rates');
}

function updateRateInfo(message: string): void {
    rateInfo.innerHTML = `<p class="text-gray-800 font-bold">${message}</p>`;
    rateInfo.classList.add('animate-fade-in');
    setTimeout(() => rateInfo.classList.remove('animate-fade-in'), 500);
}

function updatePopularConversions(): void {
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) return;

    popularConversions.innerHTML = popularPairs.map(pair => {
        const rate = exchangeRates[pair.to];
        const fromCurrency = currencies.find(c => c.code === pair.from);
        const toCurrency = currencies.find(c => c.code === pair.to);

        if (!rate || !fromCurrency || !toCurrency) return '';

        return `
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center">
                        <span class="flag-emoji">${fromCurrency.flag}</span>
                        <span class="font-semibold text-gray-800">${pair.from}</span>
                    </div>
                    <i class="fas fa-arrow-right text-blue-500 px-2"></i>
                    <div class="flex items-center">
                        <span class="flag-emoji">${toCurrency.flag}</span>
                        <span class="font-semibold text-gray-800">${pair.to}</span>
                    </div>
                </div>
                <div class="text-center">
                    <div class="rate-display text-lg">1 ${pair.from} = ${rate.toFixed(4)} ${pair.to}</div>
                </div>
            </div>
        `;
    }).join('');
}

function updateLastUpdated(): void {
    lastUpdated.textContent = lastUpdateTime
        ? lastUpdateTime.toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric',
              hour: '2-digit', minute: '2-digit', second: '2-digit'
          })
        : 'Not yet updated';
}

function showLoading(show: boolean): void {
    loadingOverlay.classList.toggle('hidden', !show);
}

function showError(message: string): void {
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg mb-4 text-center font-medium animate-slide-up';
    errorDiv.textContent = message;

    const converterCard = document.querySelector('.bg-white');
    converterCard?.parentNode?.insertBefore(errorDiv, converterCard.nextSibling);

    setTimeout(() => errorDiv.remove(), 5000);
}

function showSuccess(message: string): void {
    const existingSuccess = document.querySelector('.success-message');
    if (existingSuccess) existingSuccess.remove();

    const successDiv = document.createElement('div');
    successDiv.className = 'success-message bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg mb-4 text-center font-medium animate-slide-up';
    successDiv.textContent = message;

    const converterCard = document.querySelector('.bg-white');
    converterCard?.parentNode?.insertBefore(successDiv, converterCard.nextSibling);

    setTimeout(() => successDiv.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.classList.add('btn-ripple');
    });
});