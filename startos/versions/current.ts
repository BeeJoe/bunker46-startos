import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:6',
  releaseNotes: {
    en_US: `- Enable Registrations and Disable Registrations each ask for confirmation before running, saying who can sign up afterwards and that Bunker46 restarts.
- Reset Account Password asks you to pick the account whose password it replaces.`,
    es_ES: `- Habilitar registros y Deshabilitar registros piden confirmación antes de ejecutarse, indicando quién podrá registrarse después y que Bunker46 se reinicia.
- Restablecer contraseña de la cuenta le pide elegir la cuenta cuya contraseña reemplaza.`,
    de_DE: `- „Registrierungen aktivieren“ und „Registrierungen deaktivieren“ fragen vor der Ausführung nach einer Bestätigung und nennen, wer sich danach registrieren kann und dass Bunker46 neu startet.
- „Kontopasswort zurücksetzen“ fordert Sie auf, das Konto zu wählen, dessen Passwort ersetzt wird.`,
    pl_PL: `- „Włącz rejestracje” i „Wyłącz rejestracje” proszą o potwierdzenie przed uruchomieniem, informując, kto będzie mógł się później zarejestrować i że Bunker46 zostanie ponownie uruchomiony.
- „Zresetuj hasło konta” prosi o wybranie konta, którego hasło zostanie zastąpione.`,
    fr_FR: `- Activer les inscriptions et Désactiver les inscriptions demandent une confirmation avant de s'exécuter, en indiquant qui pourra s'inscrire ensuite et que Bunker46 redémarre.
- Réinitialiser le mot de passe du compte vous demande de choisir le compte dont le mot de passe est remplacé.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
