---
name: reference-figma-components
description: Figma file key and node id of the HUDDLING CLUB component set that src/components/ was built from; known token gaps in that file
metadata:
  type: reference
---

Figma 파일 VpNwojLKqEFU1Oq52IpJMy, 노드 2168:966("Components" 섹션)에 25개 컴포넌트가 있다 (Button 2168:1089, RSVPCard 2168:1029, InvitationCover 2168:982 등). 2026-10-20에 전부 src/components/로 옮겼다.

토큰에 없는 Figma 값 (globals.css에 추가하지 말고 보고하라는 사용자 지시가 있었음):
- cover-gradient 색(preserved-3/4) → from-text-strong / to-text-tertiary로 근사
- 글자 간격(letter-spacing) -0.12~-1px 전부 → 생략
- Image flag 반경 16.8px → rounded-media(12px)로 근사
- 12px SemiBold 텍스트 스타일 없음 → text-caption-md + font-semibold

Related: [[feedback-token-gaps]]
