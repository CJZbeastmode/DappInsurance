function getQuote(_period, _estimatedMaxAmount, _estimatedMonthlyInflow)
{
        var ret = 0.01 * _period * _estimatedMaxAmount * Math.ceil((_estimatedMaxAmount / 0.5));
        switch (_period)
        {
                case 2: ret *= 0.95; break;
                case 3: ret *= 0.9; break;
                case 4: ret *= 0.85; break;
                case 5: ret *= 0.8; break;
                default: break;
        }
        return ret;
}

export default getQuote;