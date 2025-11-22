import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { Link, View } from '@react-pdf/renderer'
import { headerStyles } from './headerStyles'
import LinkedInIcon from '@/icons/Linkedin'
import GitHubIcon from '@/icons/Github'
import LinkIcon from '@/icons/Link'
import TelephoneIcon from '@/icons/Phone'
import { FormattedText } from '@/features/pdf/formatter/formattedText'
import EnvelopeIcon from '@/icons/Mail'

const icon = (type) => {
  switch (type) {
    case 'linkedin':
      return <LinkedInIcon width="10" height="10" />
    case 'github':
      return <GitHubIcon width="10" height="10" />
    case 'phone':
      return <TelephoneIcon width="10" height="10" />
    case 'email':
      return <EnvelopeIcon width="10" height="10" />
    case 'website':
    case 'link':
    default:
      return <LinkIcon width="10" height="10" />
  }
}

export default function Header({ headerData }) {
  return (
    <ShouldDisplay data={headerData}>
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.nameContainer}>
          <ShouldDisplay data={headerData.value.firstName}>
            <FormattedText style={headerStyles.firstName}>
              {headerData.value.firstName.value}
            </FormattedText>
          </ShouldDisplay>
          <ShouldDisplay data={headerData.value.lastName}>
            <FormattedText style={headerStyles.lastName}>
              {headerData.value.lastName.value}
            </FormattedText>
          </ShouldDisplay>
        </View>
        <ShouldDisplay data={headerData.value.designation}>
          <FormattedText style={headerStyles.designation}>
            {headerData.value.designation.value}
          </FormattedText>
        </ShouldDisplay>
        <ShouldDisplay data={headerData.value.contactInfos}>
          <View style={headerStyles.contactInfosContainer}>
            {headerData.value.contactInfos.value.map((contactInfo, index) => (
              <ShouldDisplay key={index} data={contactInfo}>
                <View style={headerStyles.contactInfoContainer}>
                  {icon(contactInfo.type)}
                  <Link style={headerStyles.link} src={contactInfo.url}>
                    {contactInfo.text}
                  </Link>
                </View>
              </ShouldDisplay>
            ))}
          </View>
        </ShouldDisplay>
      </View>
    </ShouldDisplay>
  )
}
