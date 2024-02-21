// Copyright 2017-2024 @polkadot/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AssetInfo } from '../types.js';

import React, { useMemo } from 'react';

import { AddressSmall, AssetImg, Table } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { FormatBalance } from '@polkadot/react-query';

import { createAssets } from '../../../apps-config/src/assets/index.js';
import Mint from './Mint/index.js';

interface Props {
  className?: string;
  value: AssetInfo;
}

const assets = createAssets();

function toCamelCase (input: string): string {
  return input.replace(/\s(.)/g, function (match) {
    return match.toUpperCase();
  }).replace(/\s/g, '').replace(/^(.)/, function (match) {
    return match.toLowerCase();
  });
}

function Asset ({ className, value: { details, id, isIssuerMe, metadata } }: Props): React.ReactElement<Props> {
  const { systemChain } = useApi();

  const format = useMemo(
    (): [number, string] => metadata
      ? [metadata.decimals.toNumber(), metadata.symbol.toUtf8()]
      : [0, '---'],
    [metadata]
  );

  const logo = useMemo((): string | undefined => {
    const chainName = toCamelCase(systemChain);

    return assets[chainName]?.find((asset) => asset.symbol === metadata?.symbol.toUtf8() && String(asset.id) === String(id))?.ui?.logo;
  }, [id, metadata?.symbol, systemChain]);

  return (
    <tr className={className}>
      <Table.Column.Id value={id} />
      <td className=''>
        <AssetImg
          isInline
          logo={logo || 'empty'}
          withoutHl
        />
      </td>
      <td className='together'>{metadata?.name.toUtf8()}</td>
      <td className='address media--1000'>{details && <AddressSmall value={details.owner} />}</td>
      <td className='address media--1300'>{details && <AddressSmall value={details.admin} />}</td>
      <td className='address media--1600'>{details && <AddressSmall value={details.issuer} />}</td>
      <td className='address media--1900'>{details && <AddressSmall value={details.freezer} />}</td>
      <td className='number all'>{details && (
        <FormatBalance
          format={format}
          value={details.supply}
        />
      )}</td>
      <td className='button'>{details && metadata && isIssuerMe && (
        <Mint
          details={details}
          id={id}
          metadata={metadata}
        />
      )}</td>
    </tr>
  );
}

export default React.memo(Asset);
