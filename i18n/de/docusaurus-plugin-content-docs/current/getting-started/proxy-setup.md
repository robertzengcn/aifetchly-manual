---
id: proxy-setup
title: Proxy-Einrichtung
sidebar_label: Proxy-Einrichtung
description: Erfahren Sie, wie Sie Proxys für sicheres und effizientes Web-Information Organization in aiFetchly konfigurieren und verwalten.
---

# Proxy-Einrichtungsleitfaden

Die Verwendung von Proxys ist bei aiFetchly **optional**. Sie können Suchaufgaben auch ohne Proxys ausführen, aber Proxys helfen Ihnen dabei:

- **IP-Sperren** durch Suchmaschinen und Websites zu vermeiden
- **Im großen Maßstab zu scrapen**, indem Anfragen über mehrere IPs verteilt werden
- **Anonymität zu wahren**, während Sie Leads sammeln
- **Auf geografisch eingeschränkte Inhalte** aus verschiedenen Regionen zuzugreifen

:::info Optionale Funktion

Proxys sind nicht erforderlich, um aiFetchly zu nutzen. Sie können sofort mit dem Information Organization beginnen, ohne Proxys zu konfigurieren. Fügen Sie Proxys nur hinzu, wenn Sie Ratenbeschränkungen vermeiden oder auf geospezifische Inhalte zugreifen möchten.

:::

## Grundlagen zu Proxys

Ein Proxy-Server fungiert als Vermittler zwischen Ihrem Computer und den Websites, die Sie scrapen. Anstatt dass die Website Ihre IP-Adresse sieht, sieht sie die IP-Adresse des Proxys.

### Unterstützte Proxy-Typen

aiFetchly unterstützt drei Proxy-Protokolle:

| Protokoll | Beschreibung | Anwendungsfall |
|----------|-------------|----------|
| **HTTP** | Standard-HTTP-Proxy | Allgemeines Web-Information Organization, Nicht-SSL-Websites |
| **HTTPS** | Sicherer HTTP-Proxy | Sichere Websites (HTTPS), empfohlen für die meisten Information Organization-Aufgaben |
| **SOCKS5** | Socket Secure 5 | Fortgeschrittene Nutzer, unterstützt weitere Protokolle, bessere Leistung |

:::tip Empfohlenes Protokoll

Für die meisten Anwendungsfälle werden **HTTPS**-Proxys empfohlen, da sie sowohl mit HTTP- als auch mit HTTPS-Websites funktionieren.

:::

### Proxy-Format

Für jeden Proxy sind folgende Informationen erforderlich:

- **Host/IP** - Die Adresse des Proxyservers (z. B. `192.168.1.1` oder `proxy.example.com`)
- **Port** - Die Portnummer (z. B. `8080`, `3128`, `1080`)
- **Protokoll** - http, https oder socks5
- **Benutzername** (optional) - Zur Authentifizierung
- **Passwort** (optional) - Zur Authentifizierung

Beispiel: `192.168.1.1:8080` mit Benutzername `user1` und Passwort `pass123`

## Proxys manuell hinzufügen

### Schritt 1: Proxy-Verwaltung öffnen

1. Starten Sie aiFetchly
2. Navigieren Sie zu **Proxy** im linken Navigationsmenü
3. Sie sehen die Proxy-Verwaltungsseite mit einer Liste Ihrer Proxys

### Schritt 2: Einen einzelnen Proxy hinzufügen

1. Klicken Sie auf die Schaltfläche **Add Proxy** (+-Symbol) in der oberen rechten Ecke
2. Füllen Sie die Pflichtfelder aus:

   - **Host/IP**: Geben Sie die Adresse oder IP des Proxyservers ein
   - **Port**: Geben Sie die Portnummer ein
   - **Protokoll**: Wählen Sie aus dem Dropdown-Menü (HTTP, HTTPS oder SOCKS5)
   - **Benutzername**: (Optional) Geben Sie dies ein, falls eine Authentifizierung erforderlich ist
   - **Passwort**: (Optional) Geben Sie dies ein, falls eine Authentifizierung erforderlich ist

3. Klicken Sie auf **Submit**, um den Proxy zu speichern

:::info Authentifizierung

Falls Ihr Proxy-Anbieter eine Authentifizierung verlangt, müssen Sie Benutzername und Passwort eingeben. Nicht authentifizierte Proxys scheitern beim Testen.

:::

### Schritt 3: Den Proxy testen

Nach dem Hinzufügen von Proxys sollten Sie überprüfen, ob sie funktionieren:

1. Optional können Sie **Check timeout** in der Symbolleiste festlegen (1–60 Sekunden pro Proxy; Standard 10 Sekunden). Dieser Grenzwert gilt sowohl für den Verbindungstest als auch für die Google-Prüfung.
2. Wählen Sie den oder die Proxys aus, die Sie testen möchten (Zeilen-Kontrollkästchen).
3. Klicken Sie auf **Check Proxy**.
4. aiFetchly aktualisiert zwei Arten von Ergebnissen:

**Status (Verbindung)** — ob der Proxy Datenverkehr weiterleiten kann (z. B. einen Tunnel zu einem Test-Endpunkt):

- **Pass** — Grundlegende Proxy-Prüfung erfolgreich.
- **Failure** — Grundlegende Prüfung fehlgeschlagen (falscher Host/Port, Authentifizierung oder Netzwerk).
- **Unknown** — Noch nicht getestet.

**Google Pass** — ob derselbe Proxy **Google** erreichen kann, ohne als automatisierter Datenverkehr blockiert zu werden. Nachdem **Status** **Pass** anzeigt, führt die App eine separate Prüfung durch (Headless-Browser zu Google). Diese Spalte kann sich einen Moment später aktualisieren:

- **Pass** — Google-Prüfung erfolgreich; die IP funktioniert wahrscheinlicher für Google-basiertes Information Organization.
- **Fail** — Google hat blockiert, eine Herausforderung gesendet oder die Prüfung war fehlerhaft (häufig bei Rechenzentrums-IPs oder übermäßig genutzten Proxys).
- **Not Checked** — Noch kein Google-Ergebnis (Proxy hat die grundlegende Prüfung nie bestanden oder seit der Einführung dieser Funktion nicht geprüft).

Wenn **Status** **Failure** ist, bleibt **Google Pass** auf **Not Checked** (der Google-Schritt wird nur ausgeführt, wenn die grundlegende Prüfung bestanden wird).

## Proxys als Batch importieren

Wenn Sie mehrere Proxys haben, können Sie diese alle gleichzeitig über eine CSV-Datei importieren.

### Schritt 1: Vorlage herunterladen

1. Gehen Sie zu **Proxy** im Navigationsmenü
2. Klicken Sie auf **Batch Upload Proxy**
3. Klicken Sie auf **Download Template**, um die CSV-Vorlage herunterzuladen

### Schritt 2: CSV-Datei vorbereiten

Die CSV-Vorlage hat folgende Struktur:

```csv
host,port,protocols,user,pass
192.168.1.1,8080,http,username1,password1
192.168.1.2,3128,https,username2,password2
192.168.1.3,1080,socks5,username3,password3
192.168.1.4,8080,http,,
```

**CSV-Formatrichtlinien:**

- **host** - Erforderlich: Proxy-IP-Adresse oder Hostname
- **port** - Erforderlich: Portnummer
- **protocols** - Erforderlich: Muss "http", "https" oder "socks5" sein
- **user** - Optional: Benutzername (leer lassen, wenn keine Authentifizierung erforderlich)
- **pass** - Optional: Passwort (leer lassen, wenn keine Authentifizierung erforderlich)

:::tip CSV-Formatierung

- Ihre Datei kann dieselben Spaltenüberschriften wie die Vorlage verwenden (`host`, `port`, `protocols`, `user`, `pass`) oder die Kopfzeile weglassen, wenn Ihre Spalten in dieser Reihenfolge sind
- Verwenden Sie Kommas zur Trennung der Felder
- Lassen Sie die Felder user/pass leer, wenn Ihr Proxy keine Authentifizierung erfordert
- Speichern Sie die Datei als `.csv` (Komma-getrennte Werte)

:::

### Schritt 3: CSV importieren

1. Klicken Sie auf **Batch Upload**
2. Wählen Sie unter **Upload File** Ihre CSV aus (oder verwenden Sie **Paste Text** für einen Proxy pro Zeile)
3. Die geparsten Proxys erscheinen in der Vorschautabelle
4. Optional: Klicken Sie auf **Check Proxies**, um einen **schnellen Verbindungstest** für die Vorschauliste durchzuführen (dies ist nicht dasselbe wie die vollständige **Google Pass**-Prüfung bei gespeicherten Proxys)
5. Klicken Sie auf **Import proxy** (in einigen Sprachen als **Import All** angezeigt), um sie zu Ihrer Bibliothek hinzuzufügen
6. Öffnen Sie nach dem Import die Hauptproxy-Liste, wählen Sie die neuen Zeilen aus und klicken Sie auf **Check Proxy**, um **Status** und **Google Pass** für Aufgaben aufzuzeichnen, die Google nutzen

Um die Hauptliste nach den Prüfungen zu bereinigen, verwenden Sie **remove failure proxy** (entfernt Zeilen, deren **Status** **Failure** ist).

## Proxy-Liste verwalten

### Proxys anzeigen

Die Proxy-Liste zeigt alle Ihre Proxys mit folgenden Informationen:

| Spalte | Beschreibung |
|--------|-------------|
| **ID** | Eindeutige Kennung |
| **Host** | Proxy-Server-IP/Hostname |
| **Port** | Proxy-Port |
| **Username** | Authentifizierungs-Benutzername (falls vorhanden) |
| **Password** | Authentifizierungs-Passwort (standardmäßig ausgeblendet; über **Columns** einblenden) |
| **Protocol** | HTTP, HTTPS oder SOCKS5 |
| **Status** | Grundprüfung: Pass, Failure oder Unknown |
| **Check Time** | Zeitpunkt der letzten Proxy-Prüfung |
| **Google Pass** | Google-spezifische Prüfung: Pass, Fail oder Not Checked (siehe [Google Pass-Prüfung](#google-pass-prüfung)) |
| **Actions** | Bearbeiten- oder Löschen-Schaltflächen |

Verwenden Sie die Steuerung **Columns** in der Symbolleiste, um Spalten ein- oder auszublenden (z. B. ist das Passwort standardmäßig aus Sicherheitsgründen ausgeblendet).

### Proxys bearbeiten

1. Suchen Sie den Proxy, den Sie ändern möchten, in der Liste
2. Klicken Sie auf die Schaltfläche **Edit** (Stift-Symbol)
3. Passen Sie die Felder nach Bedarf an
4. Klicken Sie auf **Submit**, um die Änderungen zu speichern

### Proxys löschen

1. Suchen Sie den Proxy, den Sie entfernen möchten
2. Klicken Sie auf die Schaltfläche **Delete** (Papierkorb-Symbol)
3. Bestätigen Sie die Löschung

### Stapelverarbeitung

- **Check Proxy** — Mit einer oder mehreren ausgewählten Zeilen wird die vollständige Prüfung ausgeführt (**Status** plus **Google Pass**, wenn die grundlegende Prüfung bestanden wird). Es wird nichts geprüft, bis Sie mindestens einen Proxy auswählen.
- **remove failure proxy** — Löscht alle gespeicherten Proxys, deren **Status** **Failure** ist, in einer Aktion

## Proxys in Suchaufgaben verwenden

Sobald Sie Ihre Proxys hinzugefügt und getestet haben, können Sie sie in Such- und Information Organization-Aufgaben verwenden.

### Schritt 1: Suchaufgabe erstellen oder bearbeiten

1. Navigieren Sie zu **Search** → **Search Form**
2. Erstellen Sie eine neue Suchaufgabe oder bearbeiten Sie eine bestehende

### Schritt 2: Proxys auswählen

1. Suchen Sie den Abschnitt **Proxy** in der Aufgabenkonfiguration
2. Klicken Sie auf die Schaltfläche **Choose Proxy**
3. Ein Proxy-Auswahldialog wird angezeigt, der alle Ihre Proxys zeigt
4. Wählen Sie einen oder mehrere Proxys aus der Liste:
   - Bevorzugen Sie Proxys mit **Status** **Pass** und **Google Pass** **Pass**, wenn Ihre Aufgabe Google oder Google-intensive Abläufe nutzt
   - Sie können mehrere Proxys für Lastverteilung auswählen

5. Klicken Sie auf **Confirm**, um die ausgewählten Proxys zu Ihrer Aufgabe hinzuzufügen

### Schritt 3: Aufgabe ausführen

Wenn Sie die Suchaufgabe ausführen, wird aiFetchly:

- Anfragen über Ihre ausgewählten Proxys verteilen
- Automatisch zwischen Proxys rotieren
- Proxy-Fehler elegant behandeln
- Das Information Organization fortsetzen, auch wenn einige Proxys ausfallen

:::info Proxy-Rotation

Bei Verwendung mehrerer Proxys rotiert aiFetchly automatisch durch diese, um die Last zu verteilen und Ratenbeschränkungen zu vermeiden.

:::

## Proxy-Gesundheitsüberwachung

Regelmäßige Gesundheitsprüfungen stellen sicher, dass Ihre Proxys ordnungsgemäß funktionieren.

### Wann Prüfungen ausgeführt werden

- **Gespeicherte Proxys:** Verwenden Sie **Check Proxy** nach der Auswahl von Zeilen. Die Liste wird aktualisiert, während die Prüfungen laufen; wenn der Fortschritt 100 % erreicht, sind die Ergebnisse für **Status** aktuell; **Google Pass** kann bei Proxys, die den grundlegenden Schritt bestanden haben, etwas später abgeschlossen sein.
- **Batch-Upload-Dialog:** **Check Proxies** validiert nur die Verbindung für die Vorschauzeilen vor dem Import. Führen Sie **Check Proxy** auf der Hauptliste nach dem Import für **Google Pass** aus.

### Timeout für Gesundheitsprüfung

Auf der **Proxy**-Seite können Sie **Check timeout** festlegen (1–60 Sekunden, Standard **10**). Derselbe Wert gilt für die grundlegende Prüfung und die Google-Browser-Prüfung für gespeicherte Proxys.

### Statusergebnisse interpretieren

| Status | Bedeutung | Aktion |
|--------|---------|--------|
| **Pass** (grün) | Grundlegende Proxy-Prüfung erfolgreich | Bereit für allgemeine Nutzung; bestätigen Sie **Google Pass**, wenn Sie Google benötigen |
| **Failure** (rosa) | Proxy funktioniert nicht | Entfernen oder ersetzen |
| **Unknown** (grau) | Noch nicht getestet | Gesundheitsprüfung durchführen |

## Google Pass-Prüfung

**Google Pass** beantwortet die Frage: "Können wir über diesen Proxy Google laden, ohne offensichtlich blockiert zu werden?" Dabei wird eine Headless-Browser-Sitzung (ähnlich wie echtes Surfen) verwendet, was strenger ist als ein einfacher Ping- oder HTTP-Tunneltest.

- **Pass** — Nützliches Signal für Google-orientiertes Information Organization; keine Garantie für jede Google-Oberfläche oder jedes Datenvolumen.
- **Fail** — Oft Rechenzentrums-IPs, wiederverwendete Proxys oder bereits markierte IPs; versuchen Sie einen anderen Proxy oder Anbieter.
- **Not Checked** — Führen Sie **Check Proxy** bei gespeicherten Proxys aus, oder der Proxy hat die grundlegende Prüfung noch nicht bestanden.

**Google Pass** kann **Fail** sein, selbst wenn **Status** **Pass** ist, da Google zusätzliche Bot- und Missbrauchssignale über die allgemeine Konnektivität hinaus anwendet.

## Bewährte Praktiken

### 1. Zuverlässige Proxy-Anbieter verwenden

Investieren Sie in qualitativ hochwertige Proxy-Dienste. Kostenlose Proxys sind oft langsam, unzuverlässig oder bereits von großen Websites blockiert.

### 2. Regelmäßige Gesundheitsprüfungen

Testen Sie Ihre Proxys regelmäßig, insbesondere bevor Sie große Information Organization-Aufgaben ausführen.

### 3. Fehlgeschlagene Proxys entfernen

Halten Sie Ihre Proxy-Liste sauber, indem Sie fehlgeschlagene Proxys umgehend entfernen.

### 4. Mehrere Proxys verwenden

Für Information Organization im großen Maßstab verwenden Sie mehrere Proxys, um:
- Die Last zu verteilen
- Das Risiko von IP-Sperren zu verringern
- Die Information Organization-Geschwindigkeit zu erhöhen

### 5. Proxy-Standort an Ziel anpassen

Wenn Sie geospezifische Inhalte scrapen, verwenden Sie Proxys aus derselben Region wie Ihre Zielgruppe.

### 6. Proxy-Leistung überwachen

Behalten Sie im Auge, welche Proxys die beste Leistung erbringen, und priorisieren Sie diese in Ihren Aufgaben.

### 7. Einzelne Proxys nicht überlasten

Selbst funktionierende Proxys können blockiert werden, wenn sie übermäßig genutzt werden. Rotieren Sie sie regelmäßig.

## Fehlerbehebung bei Proxy-Problemen

### Alle Proxys zeigen "Failure"

**Mögliche Ursachen:**
- Netzwerkverbindungsprobleme
- Falsche Proxy-Zugangsdaten
- Der Dienst des Proxy-Anbieters ist ausgefallen

**Lösungen:**
- Überprüfen Sie Ihre Internetverbindung
- Überprüfen Sie Benutzername/Passwort bei Ihrem Proxy-Anbieter
- Kontaktieren Sie Ihren Proxy-Anbieter

### Einige Proxys fallen zeitweise aus

**Mögliche Ursachen:**
- Der Proxy-Server ist überlastet
- Instabiler Proxy-Dienst

**Lösungen:**
- Entfernen Sie unzuverlässige Proxys
- Nutzen Sie die Ergebnisse der Gesundheitsprüfung, um stabile Proxys zu identifizieren
- Erwägen Sie ein Upgrade Ihres Proxy-Dienstes

### Proxys funktionieren beim Test, scheitern aber beim Information Organization

**Mögliche Ursachen:**
- Die Zielwebsite hat strengere Anti-Information Organization-Maßnahmen
- Der Proxy wird von der Zielseite ratenbeschränkt
- **Status** ist **Pass**, aber **Google Pass** ist **Fail**, während die Aufgabe auf Google angewiesen ist

**Lösungen:**
- Verwenden Sie mehr Proxys zur Verteilung der Anfragen
- Verringern Sie die Anfragehäufigkeit
- Probieren Sie verschiedene Proxy-Anbieter aus
- Bevorzugen Sie bei Google-intensiven Workflows Proxys mit **Google Pass** **Pass**

### Verbindung zum Proxy kann nicht hergestellt werden

**Mögliche Ursachen:**
- Firewall blockiert die Proxy-Verbindung
- Falsche Proxy-Einstellungen
- Der Proxy-Server ist offline

**Lösungen:**
- Überprüfen Sie die Firewall-Einstellungen
- Überprüfen Sie Proxy-Host und -Port
- Testen Sie den Proxy in einem Browser oder mit curl

## Sicherheitsaspekte

### Proxy-Zugangsdaten schützen

- Behandeln Sie Proxy-Benutzernamen und -Passwörter wie sensible Daten
- Teilen Sie Proxy-Listen nicht mit unbefugten Personen
- Verwenden Sie sichere Methoden zur Übertragung von Proxy-Informationen

### HTTPS-Proxys verwenden

HTTPS-Proxys verschlüsseln den Datenverkehr zwischen Ihnen und dem Proxy-Server und bieten dadurch eine bessere Sicherheit.

### Proxys regelmäßig rotieren

Wechseln Sie Ihren Proxy-Pool regelmäßig, um die Sicherheit zu gewährleisten und eine Erkennung zu vermeiden.

## Nächste Schritte

Nachdem Sie Ihre Proxys konfiguriert haben:

- [Erfahren Sie mehr über Suchmaschinen-Information Organization](../lead-generation/search-engines)
- [Kontaktextraktion einrichten](../lead-generation/contact-extraction)
- [Die Wissensbibliothek konfigurieren](../ai-outreach/knowledge-library)

---

**Sie benötigen Proxys?** Erwägen Sie diese beliebten Proxy-Anbieter:
- Bright Data (ehemals Luminati)
- Smartproxy
- Oxylabs
- Storm Proxies
- ProxyMesh

*Hinweis: Dies ist keine Empfehlung. Recherche Sie und wählen Sie basierend auf Ihren spezifischen Anforderungen.*
