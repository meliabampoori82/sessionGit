import { useMemo, useState } from 'react';
import { Info } from './Icons.jsx';

const currency = (value) =>
  Number.isFinite(value)
    ? value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    : '—';

const number = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

/**
 * Compact finance estimator. Recalculates as you type; results are explicitly
 * framed as estimates rather than an offer of credit.
 */
export default function FinanceCalculator({ defaultPrice = 120000 }) {
  const [price, setPrice] = useState(String(defaultPrice));
  const [down, setDown] = useState(String(Math.round(defaultPrice * 0.15)));
  const [term, setTerm] = useState('48');
  const [rate, setRate] = useState('6.4');

  const { monthly, financed, interest, total, error } = useMemo(() => {
    const priceValue = number(price);
    const downValue = number(down);
    const termValue = number(term);
    const rateValue = number(rate);

    if (priceValue <= 0) return { error: 'Enter a vehicle price above zero.' };
    if (downValue < 0) return { error: 'Down payment cannot be negative.' };
    if (downValue >= priceValue) {
      return { error: 'Down payment must be smaller than the vehicle price.' };
    }
    if (termValue < 12 || termValue > 96) {
      return { error: 'Choose a loan term between 12 and 96 months.' };
    }
    if (rateValue < 0 || rateValue > 30) {
      return { error: 'Enter an interest rate between 0% and 30%.' };
    }

    const principal = priceValue - downValue;
    const monthlyRate = rateValue / 100 / 12;
    const payment =
      monthlyRate === 0
        ? principal / termValue
        : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termValue));
    const totalPaid = payment * termValue;

    return {
      monthly: payment,
      financed: principal,
      interest: totalPaid - principal,
      total: totalPaid,
      error: '',
    };
  }, [price, down, term, rate]);

  return (
    <div className="finance">
      <div className="finance__inputs">
        <div className="field">
          <label htmlFor="finance-price">Vehicle price</label>
          <input
            id="finance-price"
            type="number"
            min={0}
            step={1000}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="finance-down">Down payment</label>
          <input
            id="finance-down"
            type="number"
            min={0}
            step={1000}
            value={down}
            onChange={(event) => setDown(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="finance-term">Loan term (months)</label>
          <select id="finance-term" value={term} onChange={(event) => setTerm(event.target.value)}>
            {[12, 24, 36, 48, 60, 72, 84, 96].map((months) => (
              <option key={months} value={months}>
                {months} months
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="finance-rate">Annual interest rate (%)</label>
          <input
            id="finance-rate"
            type="number"
            min={0}
            max={30}
            step={0.1}
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </div>
      </div>

      <div className="finance__results" aria-live="polite">
        {error ? (
          <p className="field-error">{error}</p>
        ) : (
          <>
            <div className="finance__headline">
              <span>Estimated monthly payment</span>
              <strong>{currency(monthly)}</strong>
            </div>
            <dl className="finance__list">
              <div>
                <dt>Amount financed</dt>
                <dd>{currency(financed)}</dd>
              </div>
              <div>
                <dt>Estimated total interest</dt>
                <dd>{currency(interest)}</dd>
              </div>
              <div>
                <dt>Total estimated repayment</dt>
                <dd>{currency(total)}</dd>
              </div>
            </dl>
          </>
        )}

        <p className="finance__note">
          <Info />
          Estimates only. Actual terms depend on lender approval, credit history, taxes and fees.
        </p>
      </div>
    </div>
  );
}
