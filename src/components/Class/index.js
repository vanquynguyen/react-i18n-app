import React from 'react'
import { Trans, withTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';

class ClassComponent extends React.Component {
    render() {
        const { t } = this.props

        return (
            <div className="col-md-6">
                <div className="card p-2">
                    <div className="card-body">
                        <h5 class="card-title">{t('content.class')}</h5>

                        <Trans i18nKey='content.text' />
                        <Translation>
                            {
                                (t, { i18n }) => <p>{t('content.text')}</p>
                            }
                        </Translation>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(ClassComponent)
