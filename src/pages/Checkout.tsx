import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import type { SavedAddress, StoreItem } from "../types";
import HeroCarousel from "../components/HeroCarousel";
import { storeHeroImages } from "../data/heroImages";

const ITEMS: Record<string, StoreItem> = {
  handbook: { key: "itemHandbook", price: 189.0 },
  course: { key: "itemCourse", price: 449.0 },
  tools: { key: "itemTools", price: 59.0 }
};

const SAVED_ADDRESSES: SavedAddress[] = [
  { id: "home", nameKey: "coAddrHome", name: "Alex Tremblay", addr1: "123 Bay Street, Suite 400", addr2: "", city: "Toronto", prov: "ON", postal: "M5J 2T3", country: "Canada" },
  { id: "office", nameKey: "coAddrOffice", name: "Alex Tremblay", addr1: "44 King Street West", addr2: "", city: "Toronto", prov: "ON", postal: "M5H 1J1", country: "Canada" }
];

const blankAddress = { name: "", addr1: "", addr2: "", city: "", prov: "", postal: "", country: "Canada" };

function fmt(n: number): string {
  return `$${n.toFixed(2)}`;
}

interface AddressFieldsState {
  name: string; addr1: string; addr2: string; city: string; prov: string; postal: string; country: string;
}

function AddressFields({
  idPrefix, values, onChange, disabled
}: {
  idPrefix: string;
  values: AddressFieldsState;
  onChange: (field: keyof AddressFieldsState, value: string) => void;
  disabled?: boolean;
}) {
  const { t } = useI18n();
  return (
    <div className="fgrid">
      <div className="field full">
        <label htmlFor={`${idPrefix}Name`}>{t("coFullName")}</label>
        <input id={`${idPrefix}Name`} value={values.name} disabled={disabled} required onChange={(e) => onChange("name", e.target.value)} autoComplete="name" />
      </div>
      <div className="field full">
        <label htmlFor={`${idPrefix}Addr1`}>{t("coAddr1")}</label>
        <input id={`${idPrefix}Addr1`} value={values.addr1} disabled={disabled} required onChange={(e) => onChange("addr1", e.target.value)} autoComplete="address-line1" />
      </div>
      <div className="field full">
        <label htmlFor={`${idPrefix}Addr2`}>{t("coAddr2")}</label>
        <input id={`${idPrefix}Addr2`} value={values.addr2} disabled={disabled} onChange={(e) => onChange("addr2", e.target.value)} autoComplete="address-line2" />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}City`}>{t("coCity")}</label>
        <input id={`${idPrefix}City`} value={values.city} disabled={disabled} required onChange={(e) => onChange("city", e.target.value)} autoComplete="address-level2" />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}Prov`}>{t("coProv")}</label>
        <input id={`${idPrefix}Prov`} value={values.prov} disabled={disabled} required onChange={(e) => onChange("prov", e.target.value)} autoComplete="address-level1" />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}Postal`}>{t("coPostal")}</label>
        <input id={`${idPrefix}Postal`} value={values.postal} disabled={disabled} required onChange={(e) => onChange("postal", e.target.value)} autoComplete="postal-code" />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}Country`}>{t("coCountry")}</label>
        <input id={`${idPrefix}Country`} value={values.country} disabled={disabled} required onChange={(e) => onChange("country", e.target.value)} autoComplete="country-name" />
      </div>
    </div>
  );
}

export default function Checkout() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const item = useMemo(() => ITEMS[params.get("item") ?? ""] ?? ITEMS.handbook, [params]);

  const [shipSelect, setShipSelect] = useState("home");
  const [shipFields, setShipFields] = useState<AddressFieldsState>(() => {
    const a = SAVED_ADDRESSES.find((x) => x.id === "home")!;
    return { name: a.name, addr1: a.addr1, addr2: a.addr2, city: a.city, prov: a.prov, postal: a.postal, country: a.country };
  });

  const [billSame, setBillSame] = useState(true);
  const [billSelect, setBillSelect] = useState("home");
  const [billFields, setBillFields] = useState<AddressFieldsState>(blankAddress);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  function applySavedAddress(id: string, setter: (fields: AddressFieldsState) => void) {
    if (id === "new") {
      setter(blankAddress);
      return;
    }
    const a = SAVED_ADDRESSES.find((x) => x.id === id);
    if (a) setter({ name: a.name, addr1: a.addr1, addr2: a.addr2, city: a.city, prov: a.prov, postal: a.postal, country: a.country });
  }

  function handleShipSelect(id: string) {
    setShipSelect(id);
    applySavedAddress(id, setShipFields);
  }

  function handleBillSelect(id: string) {
    setBillSelect(id);
    applySavedAddress(id, setBillFields);
  }

  function handleBillSameToggle(checked: boolean) {
    setBillSame(checked);
    if (!checked && billFields.name === "" && billFields.addr1 === "") {
      applySavedAddress(billSelect, setBillFields);
    }
  }

  const subtotal = item.price;
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderNumber(`CPA-${Math.floor(100000 + Math.random() * 900000)}`);
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <section><div className="wrap">
        <div className="wizard">
          <div className="wresult">
            <h3>{t("coConfirmH")}</h3>
            <p>{t("coConfirmP")}</p>
            <p><strong>{t("coOrderNum")}</strong> {orderNumber}</p>
            <p className="wback"><Link className="btn primary" to="/cpastore">{t("coBackToStore")}</Link></p>
          </div>
        </div>
      </div></section>
    );
  }

  return (
    <>
      <div className="pagehero store-hero">
        <div className="wrap">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">{t("home")}</Link> / <Link to="/cpastore">{t("nav5")}</Link> / <span>{t("coTitle")}</span>
            </nav>
            <h1>{t("coTitle")}</h1>
            <p>{t("coLede")}</p>
          </div>
        </div>
        <HeroCarousel className="pagehero-media" images={storeHeroImages} />
      </div>
      <section><div className="wrap">
        <form className="checkout-grid" onSubmit={handleSubmit} noValidate>
          <div>
            <div className="checkout-card">
              <h2>{t("coShipH")}</h2>
              <div className="field">
                <label htmlFor="shipSelect">{t("coSavedAddr")}</label>
                <select id="shipSelect" value={shipSelect} onChange={(e) => handleShipSelect(e.target.value)}>
                  {SAVED_ADDRESSES.map((a) => <option key={a.id} value={a.id}>{t(a.nameKey)}</option>)}
                  <option value="new">{t("coAddNew")}</option>
                </select>
              </div>
              <AddressFields idPrefix="ship" values={shipFields} onChange={(f, v) => setShipFields((s) => ({ ...s, [f]: v }))} />
            </div>

            <div className="checkout-card">
              <h2>{t("coBillH")}</h2>
              <label className="checkrow">
                <input type="checkbox" checked={billSame} onChange={(e) => handleBillSameToggle(e.target.checked)} />
                <span>{t("coBillSame")}</span>
              </label>
              {!billSame && (
                <div>
                  <div className="field">
                    <label htmlFor="billSelect">{t("coSavedAddr")}</label>
                    <select id="billSelect" value={billSelect} onChange={(e) => handleBillSelect(e.target.value)}>
                      {SAVED_ADDRESSES.map((a) => <option key={a.id} value={a.id}>{t(a.nameKey)}</option>)}
                      <option value="new">{t("coAddNew")}</option>
                    </select>
                  </div>
                  <AddressFields idPrefix="bill" values={billFields} onChange={(f, v) => setBillFields((s) => ({ ...s, [f]: v }))} />
                </div>
              )}
            </div>

            <div className="checkout-card">
              <h2>{t("coPayH")}</h2>
              <div className="field full">
                <label htmlFor="cardName">{t("coCardName")}</label>
                <input id="cardName" value={cardName} required onChange={(e) => setCardName(e.target.value)} autoComplete="cc-name" />
              </div>
              <div className="field full">
                <label htmlFor="cardNumber">{t("coCardNumber")}</label>
                <input id="cardNumber" value={cardNumber} required inputMode="numeric" placeholder="0000 0000 0000 0000" maxLength={19} onChange={(e) => setCardNumber(e.target.value)} autoComplete="cc-number" />
              </div>
              <div className="fgrid">
                <div className="field">
                  <label htmlFor="cardExpiry">{t("coExpiry")}</label>
                  <input id="cardExpiry" value={cardExpiry} required placeholder="MM/YY" maxLength={5} onChange={(e) => setCardExpiry(e.target.value)} autoComplete="cc-exp" />
                </div>
                <div className="field">
                  <label htmlFor="cardCvc">{t("coCvc")}</label>
                  <input id="cardCvc" value={cardCvc} required inputMode="numeric" placeholder="123" maxLength={4} onChange={(e) => setCardCvc(e.target.value)} autoComplete="cc-csc" />
                </div>
              </div>
              <p className="chat-demo-note" style={{ textAlign: "left", padding: 0, marginTop: 6 }}>{t("coDemoNote")}</p>
            </div>
          </div>

          <aside className="checkout-card" style={{ position: "sticky", top: 96 }}>
            <h2>{t("coSummaryH")}</h2>
            <div className="summary-line"><span>{t(item.key)}</span><span>{fmt(item.price)}</span></div>
            <div className="summary-line"><span>{t("coSubtotal")}</span><span>{fmt(subtotal)}</span></div>
            <div className="summary-line"><span>{t("coTax")}</span><span>{fmt(tax)}</span></div>
            <div className="summary-line total"><span>{t("coTotal")}</span><span>{fmt(total)}</span></div>
            <button type="submit" className="btn primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
              {t("coPlaceOrder")}
            </button>
            <p className="secure-note"><span aria-hidden="true">🔒</span><span>{t("coSecureNote")}</span></p>
          </aside>
        </form>
      </div></section>
    </>
  );
}
