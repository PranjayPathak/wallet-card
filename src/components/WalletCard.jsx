import React from 'react'

function WalletCard({ walletAddress, walletBalance }) {
    return (
        <div className="wallet-card">
            <div className="wallet-card__header">
                <div className="token-details ">
                    <span className='sub-heading'>DCA</span>
                    <br />
                    <span className='heading'>(ETH/USDT)</span>
                </div>
                <div className="token-actions">
                    <div className='token-actions__action'>A</div>
                    <div className='token-actions__action'>B</div>
                </div>
            </div>

            <div className="wallet-card__body">
                <div className='wallet-card__body__head'>
                    <div className='wallet-card__body__head-data'>
                        <span className='sub-heading'>Wallet Address</span>
                        <span className='sub-heading'>Balance</span>
                    </div>
                    <div className='wallet-card__body__head-data'>
                        <span className='heading'>{walletAddress || '--'}</span>
                        <span className='heading text-err'>{walletBalance || '--'}</span>
                    </div>
                </div>

                <div className='wallet-card__body__data para'>
                    <div className='wallet-card__body__data-row'>
                        <div>
                            <span className='head'>Investment Frequency</span>
                            <span className='sub'>1 Week</span>
                        </div>
                        <div>
                            <span className='head'>Amount per Investment</span>
                            <span className='sub'>10</span>
                        </div>
                        <div>
                            <span className='head'>Swaps Completed</span>
                            <span className='sub'>32/50</span>
                        </div>
                    </div>
                    <div className='wallet-card__body__data-row'>
                        <div>
                            <span className='head'>Current Price</span>
                            <span className='sub'>1.119</span>
                        </div>
                        <div>
                            <span className='head'>Average Price</span>
                            <span className='sub text-err'>1.205</span>

                        </div>
                        <div>
                            <span className='head'>Current Holding</span>
                            <span className='sub'>0.23 ETH</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WalletCard