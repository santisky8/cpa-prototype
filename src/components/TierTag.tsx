import { useI18n } from "../i18n/I18nContext";

export type Tier = "free" | "paid";

export default function TierTag({ tier }: { tier: Tier }) {
  const { t } = useI18n();
  return <span className={`tier-tag ${tier}`}>{t(tier === "free" ? "tierFree" : "tierPaid")}</span>;
}
