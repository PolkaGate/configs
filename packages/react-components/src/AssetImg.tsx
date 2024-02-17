// Copyright 2017-2024 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IconName } from '@fortawesome/fontawesome-svg-core';

import React, { useMemo } from 'react';

import { createWsEndpoints } from '@polkadot/apps-config';
import { externalEmptySVG } from '@polkadot/apps-config/ui/logos/external';
import { useApi } from '@polkadot/react-hooks';

import Icon from './Icon.js';
import { styled } from './styled.js';

interface Props {
  className?: string;
  isInline?: boolean;
  logo?: string;
  onClick?: () => any;
  withoutHl?: boolean;
}

function AssetImg ({ className = '', isInline, logo, onClick, withoutHl }: Props): React.ReactElement<Props> {
  const img = useMemo((): unknown => {
    const imgBase = logo || externalEmptySVG;
    const img = !imgBase || imgBase === 'empty' || !(imgBase.startsWith('data:') || imgBase.startsWith('fa;'))
      ? externalEmptySVG
      : imgBase.startsWith('fa;')
        ? imgBase.substring(3)
        : imgBase;

    return img;
  }, [logo]);

  const iconClassName = `${className} ui--ChainImg ${(!logo && !withoutHl) ? 'highlight--bg' : ''} ${isInline ? 'isInline' : ''}`;

  return (
    <StyledImg
      alt='chain logo'
      className={iconClassName}
      onClick={onClick}
      src={img as string}
    />
  );
}

const STYLE = `
  background: white;
  border-radius: 50%;
  box-sizing: border-box;
  color: #333;

  &.isInline {
    display: inline-block;
    height: 24px;
    margin-right: 0.75rem;
    vertical-align: middle;
    width: 24px;
  }
`;

const StyledImg = styled.img`${STYLE}`;

export default React.memo(AssetImg);
