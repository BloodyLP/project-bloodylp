/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Service Record
 *
 * Rank Image Helper
 *
 * Description:
 * Ermittelt den Bildpfad eines Dienstgrades
 * anhand seiner eindeutigen Rank-ID.
 *
 * ============================================
 */

export function getRankImage(
    rankId: string
): string {

    return `/images/ranks/${rankId}.png`;

}